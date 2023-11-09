<template>
    <base-card>
        <base-button @click="setSelectedTab('stored-resources')" :mode="storedResMode">Stored Resources</base-button>
        <base-button @click="setSelectedTab('add-resource')" :mode="addResMode">Add Resource</base-button>
    </base-card>
    <keep-alive>
        <component :is="selectedTab"></component>
    </keep-alive>
</template>


<script>
import StoredResources from './StoredResources.vue'
import AddResource from './AddResource.vue'

export default {
    components: {
        StoredResources,
        AddResource
    },
    computed: {
        storedResMode() {
            return this.selectedTab === 'stored-resources' ? null : 'flat'
        },
        addResMode() {
            return this.selectedTab === 'add-resource' ? null : 'flat'
        }
    },
    data() {
        return {
            selectedTab: 'stored-resources',
            storedResources: [
                {
                    id: '1',
                    title: 'Official Guide',
                    description: 'Learn everyting about Vue',
                    link: 'https://vuejs.org'
                },
                {
                    id: '2',
                    title: 'Google',
                    description: 'Google is your friend in finding a career',
                    link: 'https://google.org'
                }
            ]
        }
    },
    provide() {
        return {
            resources: this.storedResources,
            AddResource: this.AddResource,
            removeResource: this.removeResource,
        }
    },
    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab
        },
        AddResource(title, description, url) {
            const newResource = {
                id: new Date().toISOString(),
                title: title,
                description: description,
                link: url
            }
            this.storedResources.unshift(newResource)
            this.selectedTab = 'stored-resources'
        }, 
        removeResource(resId) {
            const resIndex = this.storedResources.findIndex(res => res.id === resId)
            this.storedResources.splice(resIndex, 1)
        }
    }
}
</script>