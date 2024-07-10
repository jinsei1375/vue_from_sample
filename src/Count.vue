<script setup>
import { ref } from 'vue';
import CountMessage from './components/CountMessage.vue';
const count = ref(0);

// カウントアップ
const increment = () => {
	count.value++;
};

// カウントダウン
const decrement = () => {
	count.value--;
};
</script>

<template>
	<div>
		<h1>Count</h1>
		<p>{{ count }}</p>
		<button @click="increment">カウントアップ</button>
		<button @click="decrement">カウントダウン</button>
		<CountMessage :count="count" />
	</div>
</template>
