<template>
    <wrapper flex min-h-full flex-col justify-between>
        <main>
            <Header />
            <slot />
        </main>
        <Footer />
    </wrapper>
</template>