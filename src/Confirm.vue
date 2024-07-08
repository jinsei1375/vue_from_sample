<template>
    <div>
        <h1>確認ページ</h1>
        <p>Name: {{ state.name }}</p>
        <p>Email: {{ state.email }}</p>
        <button type="button" @click="handleBack">戻る</button>
        <button type="button" @click="handleSubmit">送信</button>
    </div>
</template>

<script>
    import { ref, onMounted } from 'vue';
    import { useRoute, useRouter } from 'vue-router';

    export default {
        setup() {
            const route = useRoute();
            const router = useRouter();
            // const state = route.params.state;
            const state = ref({name: '', email: ''})
            console.log(route.params.state)
            console.log(route.params)

            onMounted(() => {
                console.log(history.state)
                const currentState = history.state; // 直接history.stateを参照
                console.log(currentState)
                if (currentState) {
                    state.value = currentState;
                }
            });
        
            const handleSubmit = () => {
                router.push('/form/completed');
            };
        
            const handleBack = () => {
                router.push({ name: 'Form', state: { name: state.value.name, email: state.value.email } });
            };
        
            return { state, handleBack, handleSubmit };
        },
    };
</script>