const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 1,
        name: '算法导论',
        date: '2078-09-09',
        price: 78.00,
        count: 9
      },
      {
        id: 2,
        name: '算法导论2',
        date: '2078-02-09',
        price: 1.00,
        count: 2
      },
      {
        id: 3,
        name: '算法导论3',
        date: '2078-09-04',
        price: 728.00,
        count: 3
      }
    ]
  },
  methods: {
    getFinalPrice(price) {
      return '￥' + price.toFixed(2);
    },
    decrement(index) {
      console.log('decrement', index);
      this.books[index].count--;
    },
    increment(index) {
      console.log('increment', index);
      this.books[index].count++;
    },
    removeHandel(index) {
      this.books.splice(index, 1);
    }
  },
  computed: {
    totalPrice() {
      let totalPrice = 0;
      // 普通遍历
      // for( let i = 0;i < this.books.length;i++){
      //   totalPrice += this.books[i].price * this.books[i].count;
      // }

      // let index in books
      // for (let index in this.books) {
      //   totalPrice += this.books[index].price * this.books[index].count;
      // }

      // let book of books
      // for (let book of this.books) {
      //   totalPrice += book.count * book.price;
      // }
      // return totalPrice;
      // reduce
      return this.books.reduce(function (pre ,book) {
        return pre + book.count * book.price;
      },0);


    }
  },
  filters: {
    showPrice(price) {
      return '￥' + price.toFixed(2);
    }
  }
})

// 编程范式 ： 命令式编程、声明式编程
// 编程范式 ： 面向对象编程（第一公民：对象）、函数式编程（第一公民：函数）
// filter/map/reduce
// filter中的回调函数有一个要求：必须返回一个boolean值
// false ： 当返回为false时，函数内部会过滤掉值
// true : 当返回true时，函数内部会自动将这次回调的n加入到新的数组中
const nums = [10, 20, 30, 40, 444, 111, 26];

let total = nums.filter(n => n < 100).map(n => n * 2).reduce((pre, n) => pre + n);
console.log(total);

let newNums = nums.filter(function (n) {
  return n < 100;
});
console.log(newNums);

// map 会返回数组处理后的结果
let mapNums = nums.map(function (n) {
  return n * 2;
});
console.log(mapNums);

// reduce函数的使用
// 对数组中所有的内容进行汇总
// reduce(function,初始值)
let totalNum = nums.reduce(function (preValue, n) {
  return preValue * n;
}, 1);
console.log(totalNum);

// 1.需求：取出所有小于100的数字
// let newNums = [];
// for(let n of nums){
//   if(n < 100){
//     newNums.push(n);
//   }
// }
