export const tabsData = {
  component: {
    name: '组件',
    desc: '以下将展示快应用组件能力，组件样式仅供参考，开发者可根据自身需求自定义组件样式，具体属性参数详见快应用开发文档',
    groupList: [
      {
        name: '容器组件',
        caseList: [
          {
            name: 'div',
            path: 'component/container/div'
          },
          {
            name: 'list',
            path: 'component/container/list'
          },
          {
            name: 'popup',
            path: 'component/container/popup'
          },
          {
            name: 'stack',
            path: 'component/container/stack'
          },
          {
            name: 'swiper',
            path: 'component/container/swiper'
          },
        ]
      },
      {
        name: '基础组件',
        caseList: [
          {
            name: 'a',
            path: 'component/basic/a'
          },
          {
            name: 'image',
            path: 'component/basic/image'
          },
          {
            name: 'image-alt',
            path: 'component/basic/image-alt'
          },
          {
            name: 'image-filter',
            path: 'component/basic/image-filter'
          },
          {
            name: 'progress',
            path: 'component/basic/progress'
          },
          {
            name: 'rating',
            path: 'component/basic/rating'
          },
          {
            name: 'span',
            path: 'component/basic/span'
          },
          {
            name: 'text',
            path: 'component/basic/text'
          },
          {
            name: 'marquee',
            path: 'component/basic/marquee'
          }
        ]
      },
      {
        name: '表单组件',
        caseList: [
          {
            name: 'input',
            path: 'component/form/input'
          },
          {
            name: 'label',
            path: 'component/form/label'
          },
          {
            name: 'picker',
            path: 'component/form/picker'
          },
          {
            name: 'multi-picker',
            path: 'component/form/multi-picker'
          },
          {
            name: 'slider',
            path: 'component/form/slider'
          },
          {
            name: 'switch',
            path: 'component/form/switch'
          },
          {
            name: 'textarea',
            path: 'component/form/textarea'
          },
          {
            name: 'select',
            path: 'component/form/select'
          }
        ]
      },
      {
        name: '媒体组件',
        caseList: [
          {
            name: 'video',
            path: 'component/media/video'
          },
        ]
      },
      {
        name: '通用',
        caseList: [
          {
            name: '事件',
            component: 'event',
            path: 'component/common/event'
          },
          {
            name: '属性',
            component: 'attribute',
            path: 'component/common/attribute'
          },
          {
            name: '方法',
            component: 'method',
            path: 'component/common/method'
          },
        ]
      },
      {
        name: '样式动画',
        caseList: [
          {
            name: 'animation',
            path: 'component/style/animation'
          },
          {
            name: 'transition',
            path: 'component/style/transition'
          },
          {
            name: 'animation-direction (1090+)',
            component: 'animation-direction',
            path: 'component/style/animation-direction'
          },
          {
            name: 'transform',
            path: 'component/style/transform'
          },
          {
            name: 'translate 百分比的动画',
            component: 'translatepercent',
            path: 'component/style/translatepercent'
          },
          {
            name: 'background-position 单独测试',
            component: 'background-position',
            path: 'component/style/backgroundposition'
          },
          {
            name: 'background-image 支持.9.png',
            component: 'background-image',
            path: 'component/style/background-image'
          },
          {
            name: 'font字体设置',
            component: 'font',
            path: 'component/style/font-family'
          },
          {
            name: 'animateApi',
            component: 'animate-api',
            path: 'component/style/animateApi'
          },
          {
            name: 'overflow',
            path: 'component/style/overflow'
          }
        ]
      }
    ]
  },
  interface: {
    name: '接口',
    desc: '以下将展示快应用接口能力，具体属性参数详见快应用开发文档',
    groupList: [
      {
        name: '基本功能',
        caseList: [
          {
            name: '页面路由 router',
            component: 'router',
          },
          {
            name: '日志打印 console',
            component: 'console',
          },
          {
            name: '应用上下文 app',
            component: 'app',
          },
          {
            name: '应用管理 package',
            component: 'package',
          },
          {
            name: '加解密 cipher',
            component: 'cipher',
          },
          {
            name: '多语言',
            component: 'i18n',
          },
        ]
      },
      {
        name: '网络访问',
        caseList: [
          {
            name: '数据请求 fetch',
            component: 'fetch',
            path: 'interface/system/fetch'
          }
        ]
      },
      {
        name: '文件数据',
        caseList: [
          {
            name: '数据存储 storage',
            component: 'storage',
            path: 'interface/system/storage'
          },
          {
            name: '交换数据 exchange',
            component: 'exchange',
            path: 'interface/system/exchange'
          }
        ]
      },
      {
        name: '系统能力',
        caseList: [
          {
            name: '剪贴板 clipboard',
            component: 'clipboard',
            path: 'interface/system/clipboard'
          },
          {
            name: '地理位置 geolocation',
            component: 'geolocation',
            path: 'interface/system/geolocation'
          },
          {
            name: '日历事件 calendar',
            component: 'calendar',
            path: 'interface/system/calendar'
          },
          {
            name: '网络状态 network',
            component: 'network',
            path: 'interface/system/network'
          },
          {
            name: '设备信息 device',
            component: 'device',
            path: 'interface/system/device'
          },
          {
            name: '应用管理 package',
            component: 'package',
            path: 'interface/system/package'
          },
          {
            name: '电量信息 battery',
            component: 'battery',
            path: 'interface/system/battery'
          }
        ]
      },
      {
        name: '厂商服务',
        caseList: [
          {
            name: '厂商帐号 account',
            component: 'account',
            path: 'interface/manufacturer/account'
          },
          {
            name: '推送 push',
            component: 'push',
            path: 'interface/manufacturer/push'
          },
        ]
      }
    ]
  }
};
