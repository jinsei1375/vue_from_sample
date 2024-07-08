<template>
    <header>
        <div>ヘッダー</div>
        <nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/form">Form</router-link>
        </nav>
    </header>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>