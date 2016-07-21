class mainController {

    constructor(todoService) {
        this.todoService = todoService;
        this.load();
    }

    load() {
        this.todoService.getAll().then((res) => {
            this.contacts = res.data;
        })
    }

    create() {
        this.todoService.create(this.new).then(() => {
            this.new = '';
            this.load()
        })
    }

    update(contact) {
        this.todoService.update(contact._id, contact.nom, contact.numero).then(() => {
            this.load()
        })
    }

    delete(contact) {
        this.todoService.delete(contact).then(() => {
            this.load()
        })
    }

}
