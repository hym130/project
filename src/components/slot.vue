<template>
    <div id="solt">
        插槽
        <children>
            <div slot="header">
                <ul>
                    <li>首页</li>
                    <li>商城</li>
                </ul>
            </div>
            <div>
                这个是默认的没有具名的solt
            </div>
            <div slot="footer">
                <p>备案号</p>
            </div>
        </children>
    </div>
</template>

<script>
import children from './child'
export default {
  name: "App",
  components: {
    children
  }
};
</script>

<style>
</style>
