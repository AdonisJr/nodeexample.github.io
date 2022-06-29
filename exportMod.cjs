module.exports = function(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.fullname = () => {
        return `${this.firstname} ${this.lastname}`;
    }
};