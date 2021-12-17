<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Demo />
    <Card 
      imgSrc='xuan.png' summary='臭狗小炫'>
      <template v-slot:footer>
        <div class="footer-spring">
          <div class="level">中级·840747人报名</div>
          <div class="price">￥203954</div>
        </div>
      </template>
    </Card>
    
     <Card imgSrc='白衣大奶.jpg' summary='白衣大奶小炫'>
      <template v-slot:footer>
        <div class="footer">
          <div class="level">中级·840747人报名</div>
          <div class="price">￥203954</div>
        </div>
      </template>
    </Card>

    <Card imgSrc='炫步.gif' summary='这就是炫步!'>
        <template v-slot:footer>
          <div class="footer">
            <div class="level">中级·840747人报名</div>
            <div class="price">￥203954</div>
          </div>
        </template>
      </Card>

    <Card imgSrc='rsndm.jpg' summary='rsndm队长小炫'>
      <template v-slot:footer>
        <div class="footer">
          <div class="level">中级·840747人报名</div>
          <div class="price">￥203954</div>
        </div>
      </template>
    </Card>
   
    <Card imgSrc='幼犬.jpg'>
      幼犬小炫
      <template v-slot:footer>
        <div class="footer-spring">
          <div class="level">中级·840747人报名</div>
          <div class="price">￥203954</div>
        </div>
      </template>
      </Card>

  </div>
</template>

<script>

export default {
  name: 'App',

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.footer,.footer-spring{
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
}

.level{
  color: #9199A1;
  margin-bottom: 8px;
}

.price{
  color: #F01414;
}
</style>
