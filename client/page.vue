<template>
    <k-layout>
        <k-card>
            <div v-for="(input, index) in inputs" :key="index">
                <input v-model="input.msg" placeholder="Enter message">
                <input v-model="input.id" placeholder="Enter ID">
                <button @click="removeInput(index)">删除</button>
            </div>
            <button @click="addInput">新增</button>
        </k-card>
        <k-card>
            <!-- {{ Array.from(result.keys()) }} -->
            <div v-for="item in Array.from(result.keys())" :key="item">
                <span>消息格式：</span><span>{{ item }}</span>
                <br>
                <span>群号：</span><span>{{ result.get(item) }}</span>
                <br>
                <br>
            </div>
        </k-card>
    </k-layout>
</template>

<script>
import { ref, computed } from 'vue'

export default {
    setup() {
        const inputs = ref([{ msg: '', id: '' }])

        const addInput = () => {
            inputs.value.push({ msg: '', id: '' })
        }

        const removeInput = (index) => {
            inputs.value.splice(index, 1)
        }

        const result = computed(() => {
            const map = new Map()
            for (const input of inputs.value) {
                map.set(input.msg, input.id)
            }
            return map
        })

        return {
            inputs,
            addInput,
            removeInput,
            result
        }
    }
}
</script>
