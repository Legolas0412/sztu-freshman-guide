'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  ArrowRight, BookOpen, Bookmark, BookmarkCheck, ChevronRight, Coffee, Cpu,
  Flag, Heart, Home, Info, Search, ShieldCheck, Sparkles, TrainFront, UsersRound, X,
} from 'lucide-react';
import { categories, timeline, type GuideCategory, type GuideItem } from './data';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const iconMap = { Flag, Sparkles, BookOpen, Cpu, TrainFront, Coffee, UsersRound, ShieldCheck };
const quickTags = ['入学报到', '宿舍', '校园卡', '交通', '选课'];

export default function HomePage() {
  const [query, setQuery] = useState('');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [recent, setRecent] = useState<string[]>([]);
  const [notice, setNotice] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<GuideCategory | null>(null);
  const [selectedGuide, setSelectedGuide] = useState<GuideItem | null>(null);

  useEffect(() => {
    try {
      setFavorites(JSON.parse(localStorage.getItem('sztu-favorites') || '[]'));
      setRecent(JSON.parse(localStorage.getItem('sztu-recent') || '[]'));
    } catch { /* Keep clean defaults when stored data is invalid. */ }
  }, []);

  const allItems = useMemo(() => categories.flatMap((category) =>
    category.items.map((item) => ({ ...item, category: category.title, accent: category.accent }))), []);

  const results = useMemo(() => {
    const key = query.trim().toLowerCase();
    if (!key) return [];
    return allItems.filter((item) =>
      [item.title, item.summary, item.category, ...item.tags].join(' ').toLowerCase().includes(key));
  }, [allItems, query]);

  const persistFavorite = (id: string) => {
    const next = favorites.includes(id) ? favorites.filter((item) => item !== id) : [...favorites, id];
    setFavorites(next);
    localStorage.setItem('sztu-favorites', JSON.stringify(next));
  };

  const openGuide = (item: GuideItem) => {
    const next = [item.id, ...recent.filter((id) => id !== item.id)].slice(0, 6);
    setRecent(next);
    localStorage.setItem('sztu-recent', JSON.stringify(next));
    if (item.status === 'ready') {
      setSelectedCategory(null);
      setSelectedGuide(item);
    } else {
      setNotice(`「${item.title}」正在筹备中，链接将在后续补充。`);
      window.setTimeout(() => setNotice(''), 2800);
    }
  };

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <main>
      <header className="site-header">
        <div className="nav-shell">
          <button className="brand" onClick={() => scrollTo('home')} aria-label="返回首页">
            <img src="/sztu-mark.svg" alt="深圳技术大学校徽" />
            <span><strong>深圳技术大学</strong><small>SHENZHEN TECHNOLOGY UNIVERSITY</small></span>
          </button>
          <nav aria-label="主导航">
            <button className="active" onClick={() => scrollTo('home')}>首页</button>
            <button onClick={() => scrollTo('categories')}>攻略分类</button>
            <button onClick={() => scrollTo('saved')}>收藏 <i>{favorites.length}</i></button>
            <button onClick={() => scrollTo('about')}>关于</button>
          </nav>
          <div className="motto"><span>校训</span><b>唯实求精</b></div>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="grid-field" aria-hidden="true" />
        <div className="axis-line" aria-hidden="true"><span>22.697°N / 114.338°E</span></div>
        <div className="hero-shell">
          <div className="eyebrow"><i /> SZTU / FRESHMAN GUIDE <span>2026</span></div>
          <div className="hero-copy">
            <h1>新生，<br /><em>从这里开始。</em></h1>
          </div>
          <div className="search-zone">
            <div className="search-box">
              <Search size={22} aria-hidden="true" />
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="搜索攻略、地点或关键词" aria-label="搜索攻略" />
              {query && <button onClick={() => setQuery('')} aria-label="清空搜索"><X size={18} /></button>}
              <kbd>⌘ K</kbd>
            </div>
            <div className="quick-tags"><span>快捷搜索</span>{quickTags.map((tag) => <button key={tag} onClick={() => setQuery(tag)}>#{tag}</button>)}</div>
            {query && (
              <div className="search-results" aria-live="polite">
                <div className="results-head"><span>搜索结果</span><b>{results.length.toString().padStart(2, '0')}</b></div>
                {results.length ? results.slice(0, 7).map((item) => (
                  <button key={item.id} onClick={() => openGuide(item)}>
                    <i style={{ background: item.accent }} />
                    <span><strong>{item.title}</strong><small>{item.category} · {item.summary}</small></span>
                    <b>{item.status === 'ready' ? '已上线' : '待补充'}</b><ChevronRight size={16} />
                  </button>
                )) : <p className="no-result">暂时没有匹配结果，换一个关键词试试。</p>}
              </div>
            )}
          </div>
          <div className="hero-meta"><span><b>08</b> GUIDE MODULES</span><span><b>24</b> TOPICS READY</span><span className="online"><i /> COMMUNITY EDITION</span></div>
        </div>
      </section>

      <section className="categories section-shell" id="categories">
        <div className="section-heading">
          <div><span className="section-index">01 / EXPLORE</span><h2>攻略坐标</h2><p>选择一个模块，快速找到你现在需要的信息。</p></div>
          <div className="coordinate">SYSTEM ONLINE <i /></div>
        </div>
        <div className="category-grid">
          {categories.map((category) => {
            const Icon = iconMap[category.icon as keyof typeof iconMap];
            return (
              <article className="category-card" key={category.id} style={{ '--accent': category.accent } as React.CSSProperties}>
                <div className="card-scan" aria-hidden="true" />
                <div className="card-top"><span className="card-code">{category.code}</span><Icon size={25} strokeWidth={1.6} /><span className="card-count">{category.items.length.toString().padStart(2, '0')} ITEMS</span></div>
                <p className="card-en">{category.english}</p>
                <h3>{category.title}</h3>
                <p className="card-description">{category.description}</p>
                <div className="guide-list">
                  {category.items.map((item) => (
                    <div className="guide-row" key={item.id}>
                      <button className="guide-main" onClick={() => openGuide(item)}>
                      <span>{item.title}</span><small className={item.status === 'ready' ? 'ready' : ''}>{item.status === 'ready' ? '查看' : '待补充'}</small><ChevronRight size={15} />
                      </button>
                      <button className="favorite-btn" onClick={() => persistFavorite(item.id)} aria-label={`${favorites.includes(item.id) ? '取消收藏' : '收藏'}${item.title}`}>
                        {favorites.includes(item.id) ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
                      </button>
                    </div>
                  ))}
                </div>
                <button className="card-more" onClick={() => setSelectedCategory(category)}>查看模块 <ArrowRight size={16} /></button>
              </article>
            );
          })}
        </div>
      </section>

      <section className="timeline-section">
        <div className="section-shell">
          <div className="section-heading light">
            <div><span className="section-index">02 / TIMELINE</span><h2>新生时间轴</h2><p>从收到通知书开始，每一步都有迹可循。</p></div>
            <span className="timeline-mark">START → CAMPUS</span>
          </div>
          <div className="timeline-track">
            {timeline.map((step, index) => (
              <article key={step.code} className="timeline-step">
                <div className="timeline-node"><i /><span>{step.code}</span></div>
                <b>{String(index + 1).padStart(2, '0')}</b><h3>{step.title}</h3><p>{step.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="saved-section section-shell" id="saved">
        <div className="section-heading compact">
          <div><span className="section-index">03 / YOUR SPACE</span><h2>你的探索记录</h2></div>
        </div>
        <div className="saved-grid">
          <SavedPanel title="我的收藏" icon={<Heart size={19} />} ids={favorites} items={allItems} empty="点击攻略右侧的书签，稍后从这里继续。" openGuide={openGuide} />
          <SavedPanel title="最近浏览" icon={<Sparkles size={19} />} ids={recent} items={allItems} empty="你打开过的攻略会自动记录在这里。" openGuide={openGuide} />
        </div>
      </section>

      <footer id="about">
        <div className="footer-axis" aria-hidden="true" />
        <div className="section-shell footer-grid">
          <div className="footer-brand"><img src="/sztu-mark.svg" alt="" /><div><strong>深圳技术大学</strong><span>SHENZHEN TECHNOLOGY UNIVERSITY</span></div></div>
          <blockquote>“唯实求精”<small>SEEK TRUTH · PURSUE EXCELLENCE</small></blockquote>
          <div className="footer-info"><span>广东省深圳市坪山区兰田路 3002 号</span><span>本网站为非官方学生攻略，仅供参考</span><strong>由26级学弟制作，感谢支持</strong></div>
        </div>
        <div className="footer-bottom"><span>SZTU FRESHMAN GUIDE / COMMUNITY EDITION</span><span>MADE FOR NEW BEGINNINGS</span></div>
      </footer>

      <div className={`toast ${notice ? 'show' : ''}`} role="status"><i />{notice}</div>
      <Dialog open={Boolean(selectedCategory)} onOpenChange={(open) => !open && setSelectedCategory(null)}>
        <DialogContent className="module-dialog">
          {selectedCategory && <>
            <DialogHeader className="module-dialog-head">
              <span>{selectedCategory.code} / {selectedCategory.english}</span>
              <DialogTitle>{selectedCategory.title}</DialogTitle>
              <DialogDescription>{selectedCategory.description}</DialogDescription>
            </DialogHeader>
            <div className="module-content">
              {selectedCategory.items.map((item, index) => (
                <button key={item.id} onClick={() => openGuide(item)}>
                  <b>{String(index + 1).padStart(2, '0')}</b>
                  <span><strong>{item.title}</strong><small>{item.summary}</small></span>
                  <em className={item.status === 'ready' ? 'ready' : ''}>{item.status === 'ready' ? '查看详情' : '待补充'}</em><ChevronRight size={18} />
                </button>
              ))}
            </div>
            <div className="module-dialog-foot"><span>MODULE CONTENT</span><span>{selectedCategory.items.length.toString().padStart(2, '0')} TOPICS</span></div>
          </>}
        </DialogContent>
      </Dialog>
      <Dialog open={Boolean(selectedGuide)} onOpenChange={(open) => !open && setSelectedGuide(null)}>
        <DialogContent className="guide-dialog">
          {selectedGuide && <>
            <DialogHeader className="guide-dialog-head">
              <span>GUIDE / {selectedGuide.status === 'ready' ? 'READY' : 'DRAFT'}</span>
              <DialogTitle>{selectedGuide.title}</DialogTitle>
              <DialogDescription>{selectedGuide.summary}</DialogDescription>
            </DialogHeader>
            <div className="guide-detail">
              {selectedGuide.image && <a className="map-frame" href={selectedGuide.image} target="_blank" rel="noreferrer"><img src={selectedGuide.image} alt="深圳技术大学校园地图" /><span>点击查看原图 <ArrowRight size={15} /></span></a>}
              {selectedGuide.steps && <div className="detail-block"><h4>操作步骤</h4><ol>{selectedGuide.steps.map((step, index) => <li key={step}><b>{String(index + 1).padStart(2, '0')}</b><span>{step}</span></li>)}</ol></div>}
              {selectedGuide.locations && <div className="detail-block"><h4>区域索引</h4><ul>{selectedGuide.locations.map((location) => <li key={location}>{location}</li>)}</ul></div>}
              {selectedGuide.note && <div className="guide-note"><strong>请注意</strong><p>{selectedGuide.note}</p></div>}
              {selectedGuide.contact && <div className="guide-contact"><span>咨询电话</span><a href={`tel:${selectedGuide.contact.split('：').pop()}`}>{selectedGuide.contact}</a></div>}
              {selectedGuide.href && <a className="source-link" href={selectedGuide.href} target="_blank" rel="noopener noreferrer">{selectedGuide.sourceLabel || '查看资料原文'} <ArrowRight size={16} /></a>}
            </div>
          </>}
        </DialogContent>
      </Dialog>
      <nav className="mobile-nav" aria-label="移动端导航">
        <button onClick={() => scrollTo('home')}><Home size={19} />首页</button>
        <button onClick={() => scrollTo('categories')}><Search size={19} />攻略</button>
        <button onClick={() => scrollTo('saved')}><Heart size={19} />收藏</button>
        <button onClick={() => scrollTo('about')}><Info size={19} />关于</button>
      </nav>
    </main>
  );
}

function SavedPanel({ title, icon, ids, items, empty, openGuide }: { title: string; icon: React.ReactNode; ids: string[]; items: Array<GuideItem & { category: string }>; empty: string; openGuide: (item: GuideItem) => void }) {
  const visible = ids.map((id) => items.find((item) => item.id === id)).filter(Boolean) as Array<GuideItem & { category: string }>;
  return <div className="saved-panel"><div className="saved-head"><span>{icon}{title}</span><b>{visible.length.toString().padStart(2, '0')}</b></div>{visible.length ? <div className="saved-items">{visible.map((item) => <button key={item.id} onClick={() => openGuide(item)}><span><strong>{item.title}</strong><small>{item.category}</small></span><ChevronRight size={17} /></button>)}</div> : <div className="saved-empty"><Bookmark size={24} /><p>{empty}</p></div>}</div>;
}
