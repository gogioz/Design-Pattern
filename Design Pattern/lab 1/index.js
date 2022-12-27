class Book {
    static bookId = 0;
    constructor(_author, _name, _price, _rackNo, _status, _edition, _dateOfPurchase) {
        this.bookId = ++Book.bookId;
        this.author = _author;
        this.name = _name;
        this.price = _price;
        this.rackNo = _rackNo;
        this.status = _status;
        this.edition = _edition;
        this.dateOfPurchase = _dateOfPurchase;
    }


    displayBook() {
        console.log(
            `This book's name is ${this.name} and it's written by ${this.author} for a $${this.price}, The availability of this book is: ${this.status}`
        );
    }

    updateBook() {
        if (this.status === true) this.status = false;
        else this.status = true;
    }
}

class Journals extends Book {}

class StudyBooks extends Book {}

class Magazines extends Book {}

class Librarian {
    constructor(_name, _password) {
        this.name = _name;
        this.password = _password;
    }

    searchBook(bookTitle, books) {
        if (books.includes(bookTitle)) {
            console.log("Found");
        } else {
            console.log("Book isn't found");
        }
    }
    verifyMember(member) {
        let phoneNumCheck = new RegExp("^01[0125][0-9]{8}$");
        if (
            typeof member.name !== "string" ||
            typeof member.address !== "string" ||
            !phoneNumCheck.test(member.phoneNo)
        ) {
            console.log("This membership is invalid");
        } else {
            console.log("This membership is valid");
        }
    }
    issueBook(book, bookDb) {
        bookDb.push(book);
    }
    calculateFine() {
        Transaction.transactionsDb.forEach((transaction) => {
            if (new Date() > transaction.dueDate) {
                console.log(
                    `Member ${transaction.memberId} You've been fined for not returning the book within the due date.`
                );
            }
        });
    }

    createBill(member, amount) {
        let bill = new Bill(new Date(), member, amount);
        bill.billCreate();
    }

    returnBook() {
        console.log(`Book returned to the library successfully`);
    }
}

class Transaction {
    static transactionsDb = [];
    static #deletedTransactionsDb = [];
    constructor(_transId, _memberId, _bookId, _dateOfIssue, _dueDate) {
        this.transId = _transId;
        this.memberId = _memberId;
        this.bookId = _bookId;
        this.dateOfIssue = _dateOfIssue;
        this.dueDate = _dueDate;
    }

    createTransaction() {
        Transaction.transactionsDb.push(this);
        console.log(`This transaction is added to database`);
    }
    deleteTransaction() {
        Transaction.#deletedTransactionsDb.push(this);
        Transaction.transactionsDb = Transaction.transactionsDb.filter((transaction) => transaction !== this);
        // console.log(Transaction.transactionsDb);
    }
    retrieveTransaction() {
        Transaction.transactionsDb.push(this);
        Transaction.#deletedTransactionsDb = Transaction.#deletedTransactionsDb.filter(
            (transaction) => transaction !== this
        );
        console.log(Transaction.transactionsDb);
    }
}

class MemberRecord {
    static membersCount = 0;
    constructor(type, dateOfMembership, noBookIssued, maxBookLimit, name, address, phoneNo) {
        this.memberId = ++MemberRecord.membersCount;
        this.type = type;
        this.dateOfMembership = dateOfMembership;
        this.noBookIssued = noBookIssued;
        this.maxBookLimit = maxBookLimit;
        this.name = name;
        this.address = address;
        this.phoneNo = phoneNo;
    }

    retrieveMember() {
        if (this.type === "Cancelled" || this.type === "Expired") {
            this.type = "Active";
        }
    }
    increaseBookIssued() {
        while (this.noBookIssued < this.maxBookLimit) {
            this.noBookIssued++;
        }
    }
    decreaseBookIssued(librarian) {
        while (this.noBookIssued > 0) {
            librarian.returnBook();
            this.noBookIssued--;
        }
    }
    payBill() {
        Transaction.transactionsDb.forEach((transaction) => {
            if (transaction.memberId == this.memberId && new Date() < transaction.dueDate) {
                console.log(`Bill ${transaction.transId} is payed!`);
            }
        });
    }
}

class Student extends MemberRecord {}
class Faculty extends MemberRecord {}

class Bill {
    static #billDb = [];
    static billsNum = 0;
    constructor(date, memberId, amount) {
        this.billNum = ++Bill.billsNum;
        this.date = date;
        this.memberId = memberId;
        this.amount = amount;
    }
    billCreate() {
        Bill.#billDb.push(this);
        console.log(Bill.#billDb);
    }

    billUpdate(amount) {
        this.amount = amount;
    }
}

let b1 = new Book("Agath Kristy", "Wolf", 80, 1, true, "First", new Date());
let b2 = new Book("Nageeb Mahfoz", "Start and End", 150, 2, true, "Exclusive 2009", new Date());
b1.displayBook();
b1.updateBook();

let booksDb = [];

let l1 = new Librarian("Omar", "123");
l1.issueBook(b1, booksDb);
l1.searchBook(b1, booksDb);

let t1 = new Transaction(1, 1, 1, new Date(), new Date(new Date().getTime() + 8 * 36400000));

t1.createTransaction();
t1.deleteTransaction();
t1.retrieveTransaction();

let m1 = new MemberRecord("Minutes", "2000", 1, 10, "Hager", "Giza", "3820007252000");
let m2 = new MemberRecord("Coco", "1994", 1, 10, "Ahmed", "Cairo", "1251994211999");
l1.createBill(m1.memberId, 150);
l1.createBill(m2.memberId, 300);

l1.verifyMember(m1);
m1.payBill();

l1.calculateFine();
m1.decreaseBookIssued(l1);
