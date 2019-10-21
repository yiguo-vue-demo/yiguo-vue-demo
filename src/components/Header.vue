<template>
  <header class="topBox">
    <div class="headerTop">
      <div class="wrap">
        <div class="wrap-left">
          <span>欢迎光临易果生鲜！</span>
          <span class="left-text">配送至：</span>
          <span class="left-img">
            <a href="javascript:;">
              上海
              <span></span>
            </a>
          </span>
          <span class="imgnotice">
            <img src="./images/notice.png" alt />
            <span>网警提示</span>
          </span>
        </div>
        <div class="wrap-right">
          <a href="javascript:;">
            <span>[登录]</span>
          </a>
          <a href="javascript:;">
            <span>[注册]</span>
          </a>
          <a href="javascript:;">
            <span class="spanimg">
              <span class="spanimg1"></span>
              <span>我的易果</span>
              <span class="spanimg2"></span>
            </span>
          </a>
          <a href="javascript:;">
            <span class="pnoneing">
              <span class="pnoneing1"></span>
              <span>手机易果</span>
              <span class="pnoneing2"></span>
            </span>
          </a>
          <a href="javascript:;">
            <span class="gift">
              <span class="gift1"></span>
              <span>礼品卡绑定</span>
            </span>
          </a>
          <a href="javascript:;">
            <span class="giftcard">
              <span class="giftcard1"></span>
              <span>礼品兑换券入口</span>
            </span>
          </a>
          <a href="javascript:;">
            <span class="aptitude">
              <span class="aptitude1"></span>
              <span>营业资质</span>
            </span>
          </a>
          <a href="javascript:;">
            <span class="invite">
              <span class="invite1"></span>
              <span>人才招聘</span>
            </span>
          </a>
        </div>
      </div>
    </div>
    <div class="headerContent">
      <div class="wrap1">
        <div class="wrap1-left">
          <h1>
            <a href="javascript:;"><img src="./images/logo.png" alt=""></a>
          </h1>
        </div>
        <div class="wrap1-center">
            <input type="text" placeholder="请输入要搜索内容">
            <button>搜索</button>
            <ul class="centerList">
              <li>虾仁</li>
              <li>三文鱼</li>
              <li>冰鲜牛肉</li>
              <li>刺身</li>
              <li>新西兰鹿肉</li>
              <li>鳕鱼</li>
              <li>牛腱</li>
              <li>奇异果</li>
            </ul>
        </div>
        <div class="wrap1-right">
          <div class="righttext">
            <div class="rightbox">
              <span class="righttext1"></span>
              <span class="righttext2">0.0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang='stylus'  scoped>
.topBox
  width 100%
  .headerTop
    width 100%
    height 30px
    // background-color skyblue
    .wrap
      width 1200px
      height 30px
      // background-color green
      margin 0 auto
      .wrap-left
        width 35%
        height 30px
        // background-color yellow
        float left
        font-size 12px
        line-height 30px
        span
          display inline-block
        .left-text
          margin-left 17px
          color #008842
        .left-img
          margin-left 10px
          width 40px
          color #008842
          a
            span
              width 10px
              height 10px
              display inline-block
              background url('./images/header-img.png')
              background-position 0px 3px
        .imgnotice
          margin-left 20px
          line-height 30px
          span
            display inline-block
            margin-left 5px
          img
            width 16px
            height 16px
            vertical-align middle
      .wrap-right
        width 65%
        height 30px
        // background-color greenyellow
        float left
        font-size 12px
        line-height 30px
        a 
          color black
          :hover
            color #008842 
          span
            display inline-block
            margin 0 7px
          .spanimg
            .spanimg1
              width 18px
              height 18px
              display inline-block
              background url('./images/header-img.png')
              background-position 150px 0px
              margin 0
              vertical-align middle
            .spanimg2
              width 10px
              height 10px
              display inline-block
              background url('./images/header-img.png')
              background-position 0px 2px
              margin 0
              vertical-align middle
          .pnoneing
            .pnoneing1
              width 18px
              height 18px
              display inline-block
              background url('./images/header-img.png')
              background-position 127px 0px
              margin 0
              vertical-align middle
            .pnoneing2
              width 10px
              height 10px
              display inline-block
              background url('./images/header-img.png')
              background-position 0px 2px
              margin 0
              vertical-align middle
          .gift
            .gift1
              width 18px
              height 18px
              display inline-block
              background url('./images/header-img.png')
              background-position 41px 0px
              margin 0
              vertical-align middle
          .giftcard
            .giftcard1
              width 18px
              height 18px
              display inline-block
              background url('./images/header-img.png')
              background-position 104px 0px
              margin 0
              vertical-align middle
          .aptitude
            .aptitude1
              width 18px
              height 18px
              display inline-block
              background url('./images/aptitudeicon.png')
              margin 0
              vertical-align middle
          .invite
            .invite1
              width 18px
              height 18px
              display inline-block
              background url('./images/invit.png')
              margin 0
              vertical-align middle
  .headerContent
    width 100%
    height 78px
    background-color #E0E0E0
    .wrap1
      width 1200px
      height 78px
      margin 0 auto 
      // background-color skyblue
      .wrap1-left
        width 25%
        height 78px
        float left
        // background-color pink
        vertical-align middle
        h1
          display block
          a
            display block
            width 145px
            height 50px
            img 
              width 145px
              height 50px
              margin-top 17px
      .wrap1-center
        width 55%
        height 78px
        float left
        // background-color yellow 
        input 
          width 447px
          height 28px
          border 1px solid #008842
          margin-top 20px
          background-color #E0E0E0
          padding 0 10px
          box-sizing border-box
        button
          width 81px  
          height 29px
          background-color #008842
          border 0
          color #fff
        .centerList
          li  
            float left
            margin 7px 4px
            font-size 12px
            border 0
      .wrap1-right
        width 20%
        height 78px
        float left
        // background-color green  
        .righttext
          width 172px
          height 42px
          background-color #fff
          margin 20px 0 0 15px
          overflow hidden
          .rightbox
            margin-left 50px 
            margin-top 10px
            .righttext1
                width 30px
                height 19px
                display inline-block
                background url('./images/header-img.png')
                background-position 80px 0px
            .righttext2
              display inline-block
              color #008842
              font-size 26px
              margin-left 5px
 
</style>