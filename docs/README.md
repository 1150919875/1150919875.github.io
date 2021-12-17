# 快速开始

### 安装组件库
```bash
npm i xuans2
```

### 引用组件库
> 在main.js中引用组件库

```javascript
//全部引入
import 'xuans2/dist/css/index.css';
import MUI from 'xuans2';
Vue.use(MUI);

//按需引入
import 'xuans2/dist/css/index.css';
import {Demo} from 'xuans2';
Vue.use(Demo)
```