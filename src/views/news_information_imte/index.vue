<template>
  <div class="news_information_imte">
    <iframe
      ref="iframe"
      id="ifPtFrame"
      frameborder="0"
    />
  </div>
</template>
<script>
import { getArticleItme } from '../../api/index'
import api from '../../api/api'
// import axios from 'axios'
export default {
  name: 'news_information_imte',
  data () {
    return {}
  },
  created () {
    // this.init()
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      // axios({
      //   method: 'get',
      //   url: api.ArticleDetails + '/?url=' + this.$route.query.url
      // })
      //   .then(res => {
      //     var dom = document.getElementById('ifPtFrame')
      //     dom.srcdoc = res.data
      //     dom.src = api.ArticleDetails + '/?url=' + this.$route.query.url
      //     this.setIframeHeight('ifPtFrame')
      //   })
      //   .catch(error => {
      //     console.log(error)
      //   })
      getArticleItme(this.$route.query.url).then((res) => {
        var dom = document.getElementById('ifPtFrame')
        console.log(dom)
        dom.srcdoc = res
        dom.src = api.ArticleDetails + '/?url=' + this.$route.query.url
        this.setIframeHeight('ifPtFrame')
      })
    },
    setIframeHeight (id) {
      try {
        var iframe = document.getElementById(id)
        if (iframe.attachEvent) {
          iframe.attachEvent('onload', function () {
            iframe.height = iframe.contentWindow.document.documentElement.scrollHeight
          })
          return
        } else {
          iframe.onload = function () {
            iframe.height = 4335
            if (iframe.contentDocument.body.scrollHeight) {
              iframe.height = iframe.contentDocument.body.scrollHeight
            } else {
              alert(2)
            }
          }
          return
        }
      } catch (e) {
        throw new Error('setIframeHeight Error')
      }
    }
  }
}
</script>
<style lang="less" scoped>
.news_information_imte {
  #ifPtFrame {
    width: 100%;
    // height: 100%;
    html {
      // height: 5000px;
    }
  }
}
</style>
