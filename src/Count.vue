<script setup>
import { ref } from 'vue';
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
		<div v-if="count >= 10">
			<p>10以上になった</p>
		</div>
	</div>
</template>
