<template>
    <div>
        <draggable v-model="myArray" class="drag">
            <transition-group>
                <div v-for="element in myArray" :key="element.id">{{element.name}}</div>
            </transition-group>
        </draggable>
    </div>
</template>
<script>
export default {
    data(){
        return {
        myArray: [
        { name: 1234567890, id: 1 },
        { name: 23467890, id: 2 },
        { name: 1234589, id: 3 },
        { name: 123678, id: 4 },
        { name: 134567890, id: 5 },
        { name: 1234567890, id: 6 },
        { name: 23467890, id: 7 },
        { name: 1234589, id: 8 },
        { name: 123678, id: 9 },
        { name: 134567890, id: 10 }
      ]
        }
    }
}
</script>
<style lang="scss">
    
</style>