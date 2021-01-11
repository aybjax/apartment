export default {
    data(){
        return {
            imageOverlay: false,
        }
    },
    methods: {
        onFileChangeForPreview(file) {
            if(!file) {
                return
            }
            const img = {
                name: file.name,
                size: file.size,
                mod: file.lastModified,
                file,
            }

            const reader = new FileReader();

            reader.onload = () => {
                img.url = reader.result
                this.imageList.push(img)
                this.imageOverlay = true
            }

            reader.readAsDataURL(file)
        },
        cancelImage(){
            this.imageOverlay = false
            this.deleteImg(0)
        },
        closeOverlay(){
            this.imageOverlay = false
        },
        deleteImg(ind) {
            this.imageList.splice(ind, 1)
        },
    },
    computed: {
        img() {
            if (this.imageList.length === 0) {
                return null
            }

            return this.imageList[0]
        },
    }
}