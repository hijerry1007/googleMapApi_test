<template>
  <div class="box">
    <div class="search">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="請輸入想搜尋的地區" />
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button" id="button-addon2">搜尋</button>
        </div>
      </div>
      <div class="navigator">
        <button>搜尋目前位置</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
};
</script>
