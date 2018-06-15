<template >
  <div class="body">

    <!-- style 1 -->
    <div class="col style1">

        <img class="style1-on" src="../assets/images/style1.jpg" alt="">
        <img class="style1-off" src="../assets/images/style1_1.jpg" alt="">

    </div>

    <!-- style 2 -->
    <div class="col style2">
        <img class="style2-on" src="../assets/images/style1.jpg" alt="">
        <img class="style2-off" src="../assets/images/style1_1.jpg" alt="">
    </div>

    <!-- style 3 -->
    <div class="col style3">
        <img class="style3-on" src="../assets/images/style1.jpg" alt="">
        <img class="style3-off" src="../assets/images/style1_1.jpg" alt="">
    </div>
    <!-- style 4 -->
    <div class="col style4">
        <img class="style4-on" src="../assets/images/style1.jpg" alt="">
        <img class="style4-off" src="../assets/images/style1_1.jpg" alt="">
        <h2 class="title">This is Fashion Time now!</h2>
        <p class="content">Creating a Single-page Application with Vue + Vue Router is dead simple. With Vue.js, we are already composing our application with components. When adding Vue Router to the mix, all we need to do is map our components to the routes and let Vue Router know where to render them.</p>
    </div>
    <!-- style 5 -->
    <div class="col style5">
        <img class="style5-on" src="../assets/images/style1.jpg" alt="">
        <!--  -->
        <span class="style5-btn">加入购物车</span>
        <span class="style5-text">Creating a Single-page Application with Vue + Vue Router is dead simple. With Vue.js</span>
    </div>
    <!-- style 6 -->
    <div class="col style6">
        <img class="style6-on" src="../assets/images/style1.jpg" alt="">

    </div>
    <!-- style 7 -->
    <div class="col style7">
        <img class="style-on" src="../assets/images/style1.jpg" alt="">

    </div>
    <!-- style 8 -->
    <div class="col style8">
        <img class="style-on" src="../assets/images/style1.jpg" alt="">

    </div>
  </div>
</template>

<script type="text/javascript">

  export default {

    data () {
      return {
        //
        style: '11'
      }
    }
  }
</script>

<style lang="scss" scoped>
  //
  .col {
    // border: 1px solid grey;
    width: auto;
    // style 1
    &.style1 {
      position: relative;
      .style1-on {
      }
      //
      &:hover {
        .style1-off {
          opacity: 1;
          transition: opacity .5s ease-in;
        }
      }
      //
      .style1-off {
        opacity: 0;
        position: absolute;
        left: 0;
        top: 0;
      }
    }
    // style 2
    &.style2 {
      position: relative;
      &:hover {
          .style2-off {
              width: 613px;
              height: 613px;
              transition: width 0.5s ease-in-out;
          }
      }
      .style2-off {
          position: absolute;
          left: 0;
          top: 0;
          width: 0;
          height: 0;
      }
    }
    // style 3
    &.style3 {
      position: relative;
      &:hover {
          .style3-off {
              width: 613px;
              height: 613px;
              transition: height 0.5s ease-in;
          }
      }
      .style3-off {
          position: absolute;
          left: 0;
          top: 0;
          width: 0;
          height: 0;
      }
    }
    // style 4
    &.style4 {
      position: relative;
      overflow: hidden;
      &:hover {
          .title {
              opacity: 1;
              transition: opacity .5s ease-in;
          }
          .content {
              right: 0;
              background-color: white;
              color: Grey;
              opacity: 1;
              bottom:0;
              transition: right 0.5s ease-out, background-color 0.5s ease-out, color 0.5s ease-in;
          }
      }
      .style4-off {
          position: absolute;
          left: 0;
          top: 0;
          width: 0;
          height: 0;
          // overflow: hidden;
      }
      .title {
          background: black;
          color: white;
          padding: 5px 10px;
          position: absolute;
          // left: -613px;
          top: 0;
          width: 100%;
          font-size: 40px;
          opacity: 0;
          box-sizing: border-box;
      }
      .content {
          width: 613px;
          background-color: black;
          color: white;
          // text-transform: uppercase;
          padding: 20px;
          box-sizing: border-box;
          position: absolute;
          bottom: 0;
          margin: 0;
          right: -614px;
          opacity: 0;
      }
    }
    // style 5
    &.style5 {
        position: relative;
        overflow: hidden;
        .title {
            // font-family:
            position: absolute;
            left: 0;
            h1 {
                display: inline-block;
            }
        }
        &:hover {
            .style5-on {
                transform: scale(1.2);
                transition: transform 0.2s ease-in;
            }
            .style5-btn {
                bottom: 80px;
                opacity: 1;
                transition: bottom 0.2s ease-in, opacity 0.2s ease-in;
            }
            .style5-text {
                bottom: 80px;
                opacity: 1;
                transition: bottom 0.5s ease-in, opacity 0.2s ease-in;
            }
        }
        .style5-btn {
            position: absolute;
            bottom: 50px;
            display: block;
            background: #000;
            color: white;
            padding:10px 20px;
            border-radius: 5px;
            left: 50px;
            opacity: 0;
        }
        .style5-text {
            position: absolute;
            bottom: 50px;
            display: block;
            width: 200px;
            border: 1px solid #fff;
            color: #fff;
            padding:15px;
            left: 200px;
            opacity: 0;
            font-family: Time New Roman;
        }
    }
    &.style6 {
        &:hover {
            .style6-on {
                transform: rotate(360deg);
                transition: transform 0.5s ease-out;
            }
        }
    }
    // style 7
    &.style7 {
        background: #000;
        img {
            // transform-origin: bottom left;
            // transform: translate(30px, 30px);
        }
        &:hover {

            .style-on {
                transform: translate(30px, 30px);
                transition: transform 0.5s ease-out;
            }
        }
    }
    // style 8
    &.style8 {
        background: #000;
        img {
            // transform-origin: bottom left;
            // transform: translate(30px, 30px);
        }
        &:hover {
            .style-on {
                transform: skewX(5deg);
                transition: skewX 0.5s ease-in;
            }
        }
    }
    // style 9
    &.style9 {
        background: #000;
        img {
            // transform-origin: bottom left;
            // transform: translate(30px, 30px);
        }
        &:hover {
            .style-on {
                transform: translate(-5deg, 20deg);
                transition: transform 0.5s ease-out;
            }
        }
    }
  }
  .body {
    display: flex;
    flex-wrap: wrap;
  }
</style>
