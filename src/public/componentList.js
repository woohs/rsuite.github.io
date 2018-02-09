function randomColor() {
  return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);
}

export default [
  {
    icon: 'icon icon-briefcase',
    bg: '#6292f0',
    repoName: 'rsuite',
    url: '/components',
    name: 'Basis Components',
    intro: '基础组件',
    tags: [
      'button',
      'icon font',
      'button groups',
      'dropdown',
      'tooltips',
      'popovers',
      'navs',
      'breadcrumbs',
      'pagination',
      'modals',
      'grid system',
      'panels',
      'tables',
      'form',
      'controlLabel',
      'checkbox',
      'radio',
      'schema',
      'theme',
      'dom',
      'basis components'
    ],
    src: 'https://github.com/rsuite/rsuite'
  }, {
    icon: 'icon icon-table',
    bg: randomColor(),
    repoName: 'rsuite-table',
    url: '/rsuite-table',
    name: 'Table',
    tags: ['table', 'treetable'],
    intro: 'Table 组件，支持Tree，自定义列宽，锁定列及表头等功能',
    src: 'https://github.com/rsuite/rsuite-table'
  },
  {
    icon: 'icon icon-calendar-check-o',
    bg: randomColor(),
    repoName: 'rsuite-datepicker',
    url: '/rsuite-datepicker',
    name: 'DatePicker',
    intro: '日历选择组件',
    tags: ['date', 'picker', 'datepicker'],
    src: 'https://github.com/rsuite/rsuite-datepicker'
  },
  {
    icon: 'icon icon-calendar-minus-o',
    bg: randomColor(),
    repoName: 'rsuite-daterangepicker',
    url: '/rsuite-daterangepicker',
    name: 'DateRangePicker',
    intro: '日历范围选择组件',
    tags: ['date', 'picker', 'datepicker', 'daterangepicker'],
    src: 'https://github.com/rsuite/rsuite-daterangepicker'
  },
  {
    icon: 'icon icon-reorder',
    bg: randomColor(),
    repoName: 'rsuite-selectpicker',
    url: '/rsuite-selectpicker',
    name: 'SelectPicker',
    intro: '单项选择器组件，支持分组，搜索',
    tags: ['picker', 'select', 'selectpicker', 'dropdown'],
    src: 'https://github.com/rsuite/rsuite-selectpicker'
  },
  {
    icon: 'icon icon-list',
    bg: randomColor(),
    repoName: 'rsuite-checkpicker',
    url: '/rsuite-checkpicker',
    name: 'CheckPicker',
    intro: '多项选择器组件，支持分组，搜索',
    tags: ['picker', 'select', 'checkpicker', 'dropdown'],
    src: 'https://github.com/rsuite/rsuite-checkpicker'
  },
  {
    icon: 'icon icon-pie-chart',
    bg: randomColor(),
    repoName: 'rsuite-echarts',
    url: '/rsuite-echarts',
    name: 'ECharts',
    intro: 'ECharts 的 React 组件',
    tags: ['chart', 'echarts', 'charts'],
    src: 'https://github.com/rsuite/rsuite-echarts'
  },
  {
    icon: 'icon icon-cloud-upload',
    bg: randomColor(),
    repoName: 'rsuite-uploader',
    url: '/rsuite-uploader',
    name: 'Uploader',
    intro: '上传文件组件',
    tags: ['uploader'],
    src: 'https://github.com/rsuite/rsuite-uploader'
  },
  {
    icon: 'icon icon-tree',
    bg: randomColor(),
    repoName: 'rsuite-tree',
    url: '/rsuite-tree',
    name: 'Tree',
    intro: '树形组件',
    tags: ['tree'],
    src: 'https://github.com/rsuite/rsuite-tree'
  },
  {
    icon: 'icon icon-tree',
    bg: randomColor(),
    repoName: 'rsuite-check-tree',
    url: '/rsuite-check-tree',
    name: 'CheckTree',
    intro: '树形多选组件',
    tags: ['tree', 'checktree'],
    src: 'https://github.com/rsuite/rsuite-check-tree'
  },
  {
    icon: 'icon icon-sliders',
    bg: randomColor(),
    repoName: 'rsuite-slider',
    url: '/rsuite-slider',
    name: 'Slider',
    intro: '滑动输入条，用于在数值区间选择',
    tags: ['slider'],
    src: 'https://github.com/rsuite/rsuite-slider'
  },
  {
    icon: 'icon icon-thumb-tack',
    bg: randomColor(),
    repoName: 'rsuite-affix',
    url: '/rsuite-affix',
    name: 'Affix',
    intro: '固钉，将页面元素钉在可视范围',
    tags: ['affix'],
    src: 'https://github.com/rsuite/rsuite-affix'
  },
  {
    icon: 'icon icon-search',
    bg: randomColor(),
    repoName: 'rsuite-autocomplete',
    url: '/rsuite-autocomplete',
    name: 'Autocomplete',
    intro: '输入框自动完成功能。',
    tags: ['autocomplete'],
    src: 'https://github.com/rsuite/rsuite-autocomplete'
  },
  {
    icon: 'icon icon-clipboard',
    bg: randomColor(),
    repoName: 'rsuite-clipboard',
    url: '/rsuite-clipboard',
    name: 'Clipboard',
    intro: '复制到剪切板',
    tags: ['clipboard'],
    src: 'https://github.com/rsuite/rsuite-clipboard'
  },
  {
    icon: 'icon icon-check-circle-o',
    bg: randomColor(),
    repoName: 'rsuite-steps',
    url: '/rsuite-steps',
    name: 'Steps',
    intro: '步骤条，是一个步骤提示组件，可以在步骤繁杂的操作中引导用户',
    tags: ['step'],
    src: 'https://github.com/rsuite/rsuite-steps'
  }, {
    icon: 'icon icon-calculator',
    bg: randomColor(),
    repoName: 'rsuite-inputnumber',
    url: '/rsuite-inputnumber',
    name: 'InputNumber',
    intro: '数字输入框，通过鼠标或键盘，输入范围内的数值',
    tags: ['input number', 'input', 'number'],
    src: 'https://github.com/rsuite/rsuite-inputnumber'
  }, {
    icon: 'icon icon-bookmark',
    bg: randomColor(),
    repoName: 'rsuite-tag',
    url: '/rsuite-tag',
    name: 'Tag',
    intro: '对不同维度进行标记和分类的小标签。',
    tags: ['tag'],
    src: 'https://github.com/rsuite/rsuite-tag'
  }, {
    icon: 'icon icon-bell-o',
    bg: randomColor(),
    repoName: 'rsuite-notification',
    url: '/rsuite-notification',
    name: 'Notification',
    intro: '提供 Alert 和 Notify 两个组件，用于全局提示消息',
    tags: ['notification', 'alert', 'notify'],
    src: '/rsuite-notification/'
  }, {
    icon: 'icon icon-order-form',
    bg: randomColor(),
    repoName: 'form-lib',
    url: '/rsuite-form-lib',
    name: 'form-lib',
    intro: 'React 实现的 Form 组件',
    tags: ['form', 'form-lib', 'rsuite-form'],
    src: 'https://github.com/rsuite/form-lib'
  }, {
    icon: 'icon icon-history',
    bg: randomColor(),
    repoName: 'rsuite-timeline',
    url: '/rsuite-timeline',
    name: 'Timeline',
    intro: '垂直展示的时间轴信息',
    tags: ['timeline'],
    src: 'https://github.com/rsuite/rsuite-timeline'
  }, {
    icon: 'icon icon-toggle-down',
    bg: randomColor(),
    repoName: 'rsuite-cascader',
    url: '/rsuite-cascader',
    name: 'Cascader',
    intro: '级联选择器',
    tags: ['cascader'],
    src: 'https://github.com/rsuite/rsuite-cascader'
  }, {
    icon: 'icon icon-toggle-down',
    bg: randomColor(),
    repoName: 'rsuite-treepicker',
    url: '/rsuite-treepicker',
    name: 'TreePicker',
    intro: '树形单项选择器',
    tags: ['tree', 'picker'],
    src: 'https://github.com/rsuite/rsuite-treepicker'
  }, {
    icon: 'icon icon-toggle-down',
    bg: randomColor(),
    repoName: 'rsuite-checktreepicker',
    url: '/rsuite-checktreepicker',
    name: 'CheckTreePicker',
    intro: '树形多项选择器',
    tags: ['checktree', 'tree', 'picker'],
    src: 'https://github.com/rsuite/rsuite-checktreepicker'
  }, {
    icon: 'icon icon-navicon',
    bg: randomColor(),
    repoName: 'rsuite-page-nav',
    url: '/rsuite-page-nav',
    name: 'PageNav',
    intro: '页面导航组件',
    tags: ['nav', 'page'],
    src: 'https://github.com/rsuite/rsuite-page-nav'
  }
];




