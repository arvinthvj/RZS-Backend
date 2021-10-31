// class Student {
//     constructor(id, firstName, lastName, fatherName, classEnrolled,
//         age, phoneNumber, subject, year, semester, status ) {
//             this.id = id;
//             this.firstName = firstName;
//             this.lastName = lastName;
//             this.fatherName = fatherName;
//             this.classEnrolled = classEnrolled;
//             this.age = age;
//             this.phoneNumber = phoneNumber;
//             this.subject = subject;
//             this.year = year;
//             this.semester = semester;
//             this.status = status;
//     }
// }

class Student {
    constructor( average_price_to_order, follows_all_covid_protocals, hotel_name, kind_of_food_available, menu_available, offer_available,promoted) {
            this.average_price_to_order =average_price_to_order;
            this.follows_all_covid_protocals =follows_all_covid_protocals;
            this.hotel_name=hotel_name;
            this.kind_of_food_available=kind_of_food_available;
            this.menu_available=menu_available;
            this.offer_available=offer_available;
            this.promoted=promoted
    }
}


module.exports = Student;