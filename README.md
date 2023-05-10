## 开始

### 安装依赖
```sh
pnpm i
```

### 项目启动
```sh
# vite 启动项目
npx rich run dev:vite
# webpack 启动项目
npx rich run dev:webpack
```

### 项目打包
vite打包
```sh
# 测试环境
npx rich run build:vite:sit
# 验收环境
npx rich run build:vite:pre
# 生产环境
npx rich run build:vite:prd
```

webpack打包
```sh
# 测试环境
npx rich run build:webpack:sit
# 验收环境
npx rich run build:webpack:pre
# 生产环境
npx rich run build:webpack:prd
```

### 地址访问
http://localhost:8080/language/