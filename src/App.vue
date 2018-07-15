<template>
    <div id="app">
        <input
            class="input-poetry"
            type="text"
            placeholder="添加内容之后按下Enter键"
            v-model="newPoetryText"
            @keydown.enter="addPoetry"
        />
        <Poetry :poetry-data="poetryList"/>
    </div>
</template>
<script src="./assets/script/common.js"></script>

<style lang="scss">
@import "/assets/styles/common.scss";
</style>
