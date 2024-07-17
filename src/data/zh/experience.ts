import { ExperienceData } from '@/types/experience';

const ZH_EXPERIENCE: ExperienceData[] = [
  {
    section: '专业技能',
    icon: 'PiGear',
    items: [
      {
        title: '前端',
        subtitle: 'Vue/React/RN/Flutter',
        timeline: '2020-至今',
        tech: 'Ant Design + TypeScript + React + Vue3 + Vben',
        details: [
          '扎实的HTML/HTML5、CSS/CSS3、JavaScript基础，熟悉前端性能优化和和浏览器调试',
          '熟悉常用的前端框架和库（如：Vue、React）以及相关开发工具',
          '了解前端工程化工具以及流程（如： webpack、Vite），能独立完成前端项目的打包部署与优化',
          '熟悉常用的前端跨平台框架和库（如：React Native、Flutter）以及相关开发工具',
        ],
      },
      {
        title: '后端',
        subtitle: 'Rust/Node',
        timeline: '2020-至今',
        tech: 'Tokio + Nom + Bevy',
        details: [
          '熟悉Rust编程语言和Node开发',
          '了解常用的软件架构模式及软件开发流程',
          '熟悉Linux操作和Shell，能熟练使用基本的编程编译工具',
          '熟悉常用数据库的使用，如Mysql, Postgresql, Sqlite',
          '深度参与可视化组件系统和聊天类软件的实际开发',
          '了解音视频相关协议，如rtmp/hls/flv/rtsp等协议',
        ],
      },
      {
        title: '通用',
        subtitle: '协作',
        timeline: '2020-至今',
        tech: 'Git + 编码习惯',
        details: [
          '良好的编码习惯和协作能力，熟练git,不定时参与开源',
          '对技术有激情，喜欢钻研，能快速接受和掌握新技术，有较强的独立、主动的学习能力',
          '扎实的文档输出能力，时常在博客上发布文章',
        ],
      },
    ],
  },

  {
    section: '教育经历',
    icon: 'PiGraduationCap',
    items: [
      {
        title: '湖南工学院',
        subtitle: '通信工程',
        timeline: '2016.09 - 2020.07',
        tech: '',
        details: [],
      },
    ],
  },
  {
    section: '项目经历',
    icon: 'IoCodeSlashSharp',
    items: [
      {
        title: 'next-im',
        subtitle: 'https://github.com/zuiyu1998/next-im-v1.git',
        timeline: '2022.12 - 2023.06',
        tech: 'Rust + Tokio + Im + Sqlite3',
        details: [
          '实现了一对一消息和组消息，包括实时消息传送，消息存储，用户重连',
          '实现了好友系统，包括添加好友，处理好友请求',
          '使用grpc框架对各项服务进行解耦和负载均衡',
        ],
      },
      {
        title: '深恋',
        subtitle: '一个在各大平台上架的音频聊天软件',
        timeline: '2021.6 - 2021.9',
        tech: 'Rust + Tokio + Im + Sqlite3',
        details: [
          '借助声网实现了一对多聊天房间，支持主持人管理，上下麦等操作',
          '使用svga实现了直播房间的礼物系统',
          '项目正常运营至今',
        ],
      },
    ],
  },
];

export default ZH_EXPERIENCE;
