import path from 'path'
// import child_process from 'child_process'
// import { ConfigEnv, defineConfig, loadEnv } from 'vite'
import { defineConfig } from 'vite'
import vitePlugins from './src/composables/preset/vitePlugin'
function pathResolve(dir: string) {
  return path.resolve(process.cwd(), '.', dir)
}
// function pathResolve(dir: string) {
//   return path.resolve(process.cwd(), '.', dir)
// }
// const commitHash = child_process
//   .execSync('git rev-parse --short HEAD')
//   .toString()
//   .trim()
export default defineConfig(async (env) => {
  // const viteEnv = loadEnv(env.mode, `.env.${env.mode}`)
  return {
    base: './',
    resolve: {
      // alias: {
      //   '~/': `${path.resolve(__dirname, 'src')}/`
      // }
      alias: [
        {
          find: '~',
          replacement: pathResolve('src') + '/'
        }
      ]
    },
    css: {
      preprocessorOptions: {
        // 全局引入了 scss 的文件
        scss: {
          // charset: false,
          additionalData: `
        @import "~/styles/variables.scss";
      `,
          javascriptEnabled: true
        }
      }
    },
    build: {
      minify: 'terser',
      brotliSize: false,
      // 消除打包大小超过500kb警告
      chunkSizeWarningLimit: 2000,
      // 在生产环境移除console.log
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      },
      assetsDir: 'static/assets',
      // 静态资源打包到dist下的不同目录
      rollupOptions: {
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
        }
      }
    },
    server: {
      host: true, // host设置为true才可以使用network的形式，以ip访问项目
      port: 8080, // 端口号
      // open: true, // 自动打开浏览器
      cors: true, // 跨域设置允许
      strictPort: true, // 如果端口已占用直接退出
      // 接口代理
      proxy: {
        '/api': {
          // 本地 8000 前端代码的接口 代理到 8888 的服务端口
          target: 'http://localhost:8888/',
          changeOrigin: true, // 允许跨域
          rewrite: (path) => path.replace('/api/', '/')
        }
      }
    },
    plugins: vitePlugins(env),

    // https://github.com/vitest-dev/vitest
    test: {
      environment: 'jsdom'
    }
  }
})
