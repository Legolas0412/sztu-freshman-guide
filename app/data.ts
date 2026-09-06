export type GuideItem = {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  href?: string;
  status?: 'ready' | 'pending';
  steps?: string[];
  note?: string;
  contact?: string;
  image?: string;
  locations?: string[];
  sourceLabel?: string;
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
      { id: 'arrival-checklist', title: '2026级报到材料与节点', summary: '线上预注册、档案与现场报到事项集中整理。', tags: ['入学报到', '材料', '2026'], status: 'ready', href: 'https://mp.weixin.qq.com/s?__biz=Mzg5ODY3NzQzOQ==&mid=2247515483&idx=1&sn=78bc5d1f5a186909da5bd39ff2568a56', sourceLabel: '查看资料原文', steps: ['报到前登录学校迎新服务网，完成自助报到、学生手册学习与安全教育答题。', '按录取材料与学院通知办理学生档案、党团组织关系等事项；具体递交方式以官方通知为准。', '现场报到携带录取通知书、身份证原件或户口本，用于注册及领取校园卡。', '入校后留意体检、入学教育、缴费、医保与军训通知。'], note: '本文整理自2026级入学资料，日期和地点只适用于对应年级。请以深技大学工、学院及迎新服务网的最新通知为准。' },
      { id: 'arrival-route', title: '到校路线指南', summary: '不同交通方式到达校园的参考路线。', tags: ['交通', '入学报到'] },
      { id: 'arrival-day', title: '线上迎新办理指南', summary: '迎新服务网登录、答题与信息采集步骤。', tags: ['流程', '入学报到', '迎新'], status: 'ready', href: 'https://mp.weixin.qq.com/s/tL9cn09zYtW8Kv4EEzIN8w', sourceLabel: '查看资料原文', steps: ['电脑访问 stu.sztu.edu.cn/yxwz，登录后进入“自助报到”；移动端可按学校通知提供的二维码访问。', '先完成本科生学习手册与安全教育学习、在线答题；合格后再继续后续环节。', '完成新生问卷并保存完成页面截图，再上传至迎新系统。', '填写个人信息，上传近期蓝底免冠证件照；具体尺寸和文件限制以页面实时提示为准。', '填写到校交通与班次信息；无法按时报到也应在系统内说明。', '有需要的同学申请绿色通道，并逐项阅读、确认相关志愿书。'], note: '登录账号和初始口令请直接查看学校迎新页面或官方通知，不要向他人透露身份证信息。线上流程如有变化，以系统页面为准。', contact: '学生部：0755-23256153' },
    ],
  },
  {
    id: 'campus', code: '02', title: '校园生活', english: 'CAMPUS LIFE', icon: 'Sparkles', accent: '#8b7dff',
    description: '认识校园空间、生活节奏，以及属于技大人的日常。',
    items: [
      { id: 'campus-map', title: '校园地图速览', summary: '教学区、生活区与常用地点索引。', tags: ['校园', '地图'], status: 'ready', image: '/sztu-campus-map.jpg', note: '地图为资料图，校园建设与功能分区可能调整，请以学校最新通知及现场标识为准。', locations: ['A区：A0 食堂、A1 宿舍（南区）、A2 健康与环境工程学院 / 药学院', 'B区：B1 创意设计学院；B2、B3、B4 为相关学院与科研、交流空间', 'C区：C0 教工餐厅与湖景餐厅、C1 学院楼、C2 图书馆、C3 中心综合楼、C4 会堂、C5 公共教学楼', 'D区：D1 学院楼、D2 体育馆、D3 中德智能制造学院 / 商学院', 'E区：E0 食堂、E1 校医院、E2/E3 学生宿舍（北区）'] },
      { id: 'campus-dorm', title: '南北区宿舍指南', summary: '宿舍配置、楼内服务与周边设施速览。', tags: ['宿舍', '生活'], status: 'ready', href: 'https://mp.weixin.qq.com/s?__biz=Mzg5ODY3NzQzOQ==&mid=2247515313&idx=1&sn=8b26f3fefc01d1491dcd0ff72ab1799d', sourceLabel: '查看宿舍介绍原文', steps: ['本科生宿舍通常为四人间、上床下桌，带空调、独立阳台、洗浴间和卫生间。', '新生自行准备床上用品；软质床垫可参考1.9m×0.85—0.9m，硬质床垫可参考1.9m×0.85m，购买前建议再次确认。', '南、北区楼层均设饮水或茶水空间，并配有洗衣设施；楼内另有公共洗衣房。', '宿舍报修或生活服务可咨询学生公寓服务中心。'], locations: ['北区 E-2 / E-3：靠近 E-0 餐厅、E-00 西餐厅、校医院、北区运动场与快递驿站。', '南区 A-1：靠近 A-0 食堂、运动公园、田径场、快递驿站和地铁16号线技术大学站。', '具体宿舍分配按学院与当年床位资源安排，以官方通知为准。'], note: '公众号中的宿舍数量、开放设施和新生分配可能随年度调整，请以入住时的现场说明为准。', contact: '学生公寓服务中心：0755-23256630' },
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
      { id: 'transport-train', title: '新生火车票购票', summary: '12306学生优惠资质、预约与进站提示。', tags: ['火车票', '交通', '12306'], status: 'ready', href: 'https://mp.weixin.qq.com/s/Q33FprcqJuYNHhuv7HBeIw', sourceLabel: '查看购票资料原文', steps: ['使用新生本人身份信息注册铁路12306账号，优惠类型选择“学生”。', '在12306 App的学生优惠资质专区填写学校、家庭所在地车站、学历阶段与预计毕业年份等信息，并提交核验。', '购票时选择符合学生优惠条件的发到站、日期、车次与席别；如当年开放新生预约专区，可按页面规则提交预约。', '收到兑现或配票通知后，务必在提示的支付时限内付款。', '乘车时携带录取通知书和购票使用的有效身份证件；按车站要求完成核验或走人工检票通道。'], note: '新生预约开放时间、优惠席别、核验和支付规则可能调整。出行前请以铁路12306最新公告与订单页面为准；距离学校较近的高铁站为深圳坪山站。' },
    ],
  },
  {
    id: 'living', code: '06', title: '吃住服务', english: 'DAILY SERVICE', icon: 'Coffee', accent: '#ff7f9d',
    description: '食堂、宿舍、快递与日常服务，一站式生活导航。',
    items: [
      { id: 'living-food', title: '食堂探索指南', summary: '校园餐饮与用餐地点索引。', tags: ['食堂', '生活'] },
      { id: 'living-budget', title: '学费与生活费参考', summary: '专业学费、住宿费与入学开销的参考口径。', tags: ['学费', '生活费', '住宿费'], status: 'ready', href: 'https://mp.weixin.qq.com/s/jQj8ipTOiqTFTpxLc4K-Bw', sourceLabel: '查看费用资料原文', steps: ['普通本科收费通常由专业学费、住宿费和按实际修读学分计算的学分学费组成。', '资料显示：理工外语类专业学费参考5200元/学年、文科类4600元/学年、艺术类10000元/学年；学分学费参考80元/学分。', '本科生住宿费资料参考为1200元/学年；研究生住宿费参考为1500元/学年。', '除学杂费外，建议预留教材、医保、超额水电、生活用品与第一个月安置费用。', '缴费通过学校通知的线上移动缴费平台办理，不向个人账户转账。'], note: '以上金额来自2026年8月整理文章，只用于预算参考，不构成收费通知。国际班、减免、医保及当年收费标准请以学校财务、招生与社保部门发布的信息为准。' },
      { id: 'living-electricity', title: '宿舍电费充值', summary: '关注服务号、绑定房间并完成电表充值。', tags: ['宿舍', '电费', '生活'], status: 'ready', href: 'https://mp.weixin.qq.com/s?__biz=MzkzNzEzNjM1MQ==&mid=2247490891&idx=1&sn=6656f64e64825853270bcf72ab488956', sourceLabel: '深技大信息中心服务号原文', steps: ['微信关注“深技大信息中心服务号”。', '进入公众号，依次点击“电费充值 → 购电服务 → 用户注册”。', '注册成功后返回，点击“电表服务 → 绑定房间”。', '绑定成功后返回，点击“电表充值”并按页面提示完成充值。'], note: '充值成功后，电表余额不会即时更新，请稍后再查看。', contact: '学生公寓服务中心：0755-23256630' },
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
      { id: 'safety-dorm', title: '宿舍安全与门禁', summary: '用电、晚归、探访和住宿安全重点。', tags: ['安全', '宿舍', '门禁'], status: 'ready', href: 'https://mp.weixin.qq.com/s/3Yww6YnXHwXc1gQ5d2X6YQ', sourceLabel: '查看宿舍管理资料原文', steps: ['宿舍瞬时用电功率不得超过1200W；避免多人同时使用高功率设备。', '禁止使用电热棒、电煮锅、电磁炉、电饭煲、烘干机等发热性电阻电器，禁止在楼内给电动车电池充电。', '不使用无3C认证的劣质电器、明火器具及危险品；不得私改电线、网线或连续多次转接插头。', '23:30至次日6:00非必要不进出宿舍楼；特殊情况需携带校内有效证件并配合登记。', '长时间离开宿舍前关闭水源、电源，妥善保管财物并锁好门窗。'], locations: ['宿舍探访资料时间：9:00—12:00、14:30—20:00；访客资格与登记要求以宿舍最新规定为准。', '新生入住由学校统一分配，报到日领取钥匙并签署住宿协议。', '调宿、退宿通常需通过学工系统流程大厅申请并完成钥匙、费用和房间交接。'], note: '这是对宿舍管理资料的重点摘录，不能替代完整规章。请入住后阅读最新版《深圳技术大学本科生宿舍管理办法》。', contact: '24小时值班电话：0755-23256110' },
    ],
  },
];

export const timeline = [
  { code: 'T-04', title: '录取后', note: '确认信息 · 整理档案 · 加入迎新渠道' },
  { code: 'T-03', title: '报到前', note: '准备材料 · 规划路线 · 整理行李' },
  { code: 'T-02', title: '报到当天', note: '完成核验 · 领取物资 · 入住宿舍' },
  { code: 'T-01', title: '开学后', note: '熟悉校园 · 课程准备 · 探索社团' },
];
