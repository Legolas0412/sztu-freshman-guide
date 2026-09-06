export type GuideItem = {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  href?: string;
};

export type GuideCategory = {
  id: string;
  code: string;
  title: string;
  english: string;
  description: string;
  icon: string;
  accent: string;
  items: GuideItem[];
};

export const categories: GuideCategory[] = [
  {
    id: 'arrival', code: '01', title: '新生报到', english: 'ARRIVAL', icon: 'Flag', accent: '#38e8ff',
    description: '从录取通知到抵达校园，把重要节点一次理清。',
    items: [
      { id: 'arrival-checklist', title: '报到材料清单', summary: '证件、档案与报到材料集中整理。', tags: ['入学报到', '材料'] },
      { id: 'arrival-route', title: '到校路线指南', summary: '不同交通方式到达校园的参考路线。', tags: ['交通', '入学报到'] },
      { id: 'arrival-day', title: '报到日流程', summary: '从校门到宿舍的办理节点速览。', tags: ['流程', '入学报到'] },
    ],
  },
  {
    id: 'campus', code: '02', title: '校园生活', english: 'CAMPUS LIFE', icon: 'Sparkles', accent: '#8b7dff',
    description: '认识校园空间、生活节奏，以及属于技大人的日常。',
    items: [
      { id: 'campus-map', title: '校园地图速览', summary: '教学区、生活区与常用地点索引。', tags: ['校园', '地图'] },
      { id: 'campus-dorm', title: '宿舍生活指南', summary: '入住准备与宿舍生活常见问题。', tags: ['宿舍', '生活'] },
      { id: 'campus-calendar', title: '校园活动日历', summary: '值得关注的校园活动入口。', tags: ['活动', '校园'] },
    ],
  },
  {
    id: 'study', code: '03', title: '学习与教务', english: 'ACADEMICS', icon: 'BookOpen', accent: '#58f0b1',
    description: '选课、教务、图书馆，从第一节课开始高效学习。',
    items: [
      { id: 'study-course', title: '选课入门', summary: '了解选课入口与基本操作。', tags: ['选课', '教务'] },
      { id: 'study-library', title: '图书馆使用指南', summary: '借阅、座位与数字资源入口。', tags: ['图书馆', '学习'] },
      { id: 'study-space', title: '自习空间索引', summary: '整理校内常用学习空间。', tags: ['自习', '校园'] },
    ],
  },
  {
    id: 'digital', code: '04', title: '数字校园', english: 'DIGITAL CAMPUS', icon: 'Cpu', accent: '#2fa8ff',
    description: '校园网络、统一门户与常用系统的快速入口。',
    items: [
      { id: 'digital-account', title: '校园账号激活', summary: '校园身份与常用账号说明。', tags: ['校园卡', '账号'] },
      { id: 'digital-network', title: '校园网连接', summary: '网络连接与常见问题入口。', tags: ['网络', '数字校园'] },
      { id: 'digital-tools', title: '常用系统导航', summary: '教务、邮箱与校园服务入口。', tags: ['系统', '教务'] },
    ],
  },
  {
    id: 'transport', code: '05', title: '交通出行', english: 'MOBILITY', icon: 'TrainFront', accent: '#ffcc66',
    description: '进出校园、通勤换乘与周边探索的出行参考。',
    items: [
      { id: 'transport-campus', title: '校内通行', summary: '步行与校园内通行提示。', tags: ['交通', '校园'] },
      { id: 'transport-city', title: '城市交通', summary: '连接坪山与深圳各区的出行入口。', tags: ['交通', '深圳'] },
      { id: 'transport-holiday', title: '节假日返程', summary: '车站、机场方向的路线整理。', tags: ['返程', '交通'] },
    ],
  },
  {
    id: 'living', code: '06', title: '吃住服务', english: 'DAILY SERVICE', icon: 'Coffee', accent: '#ff7f9d',
    description: '食堂、宿舍、快递与日常服务，一站式生活导航。',
    items: [
      { id: 'living-food', title: '食堂探索指南', summary: '校园餐饮与用餐地点索引。', tags: ['食堂', '生活'] },
      { id: 'living-delivery', title: '快递与收件', summary: '常用收件地点与取件提示。', tags: ['快递', '生活'] },
      { id: 'living-service', title: '生活服务地图', summary: '超市、打印与常用服务点。', tags: ['服务', '校园'] },
    ],
  },
  {
    id: 'growth', code: '07', title: '社团与成长', english: 'GROWTH', icon: 'UsersRound', accent: '#b5f34b',
    description: '发现社团、竞赛与实践机会，打开大学生活的更多可能。',
    items: [
      { id: 'growth-clubs', title: '社团图鉴', summary: '寻找兴趣组织与校园伙伴。', tags: ['社团', '活动'] },
      { id: 'growth-contest', title: '竞赛入门', summary: '了解校内创新实践与赛事信息。', tags: ['竞赛', '成长'] },
      { id: 'growth-volunteer', title: '志愿服务', summary: '志愿活动与实践机会入口。', tags: ['志愿', '成长'] },
    ],
  },
  {
    id: 'safety', code: '08', title: '安全与健康', english: 'WELLBEING', icon: 'ShieldCheck', accent: '#45d7ff',
    description: '校园安全、身心健康与紧急情况处理信息。',
    items: [
      { id: 'safety-medical', title: '医疗服务', summary: '校内外就医与健康服务入口。', tags: ['健康', '服务'] },
      { id: 'safety-support', title: '心理支持', summary: '需要帮助时可以联系的资源。', tags: ['心理', '健康'] },
      { id: 'safety-emergency', title: '紧急情况指南', summary: '重要安全事项与求助方式。', tags: ['安全', '校园'] },
    ],
  },
];

export const timeline = [
  { code: 'T-04', title: '录取后', note: '确认信息 · 整理档案 · 加入迎新渠道' },
  { code: 'T-03', title: '报到前', note: '准备材料 · 规划路线 · 整理行李' },
  { code: 'T-02', title: '报到当天', note: '完成核验 · 领取物资 · 入住宿舍' },
  { code: 'T-01', title: '开学后', note: '熟悉校园 · 课程准备 · 探索社团' },
];
