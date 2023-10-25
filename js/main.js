
class Worker {
  constructor(name,surname,rate,days) {
    this.name = name
    this.surname = surname
    this.rate = rate
    this.days = days
  }

  getSalary() { console.log(`Зарплата: ` + this.rate * this.days + ` руб`)}
  getFullName() { console.log(`Имя: ${this.name}. Фамилия: ${this.surname}`)}
}

const worker1 = new Worker('Дмитрий', 'Крыленко', 2200, 20)
const worker2 = new Worker('Сергей','Савченко', 1900, 18)
const worker3 = new Worker('Олег','Быстров', 2600 ,22)

worker1.getFullName() 
worker1.getSalary()

worker2.getFullName()
worker2.getSalary()

worker3.getFullName()
worker3.getSalary()



// --------------/////////////////



