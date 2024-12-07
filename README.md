## ParkingLotGroup、ParkingLot、Parking

你是一个资深的React前端开发工程师，我会给你我请求后端给我的数据实例：

```JSON
[
  {
    "id": 1,

    "name": "The Plaza Park",

    "capacity": 9,

    "tickets": [
      {
        "plateNumber": "TPC5131",

        "position": 3,

        "parkingLot": 1,
      },

      {
        "plateNumber": "JKL5123",

        "position": 4,

        "parkingLot": 1,
      },

      {
        "plateNumber": "ABC123",

        "position": 1,

        "parkingLot": 1,
      },

      {
        "plateNumber": "ABC1234",

        "position": 2,

        "parkingLot": 1,
      },
    ],
  },

  {
    "id": 2,

    "name": "City Mall Garage",

    "capacity": 12,

    "tickets": [
      {
        "plateNumber": "XYZ789",

        "position": 1,

        "parkingLot": 2,
      },

      {
        "plateNumber": "QQE1512",

        "position": 2,

        "parkingLot": 2,
      },

      {
        "plateNumber": "GASPD12",

        "position": 4,

        "parkingLot": 2,
      },

      {
        "plateNumber": "GNA5129",

        "position": 3,

        "parkingLot": 2,
      },

      {
        "plateNumber": "FJ121AD",

        "position": 5,

        "parkingLot": 2,
      },
    ],
  }
]

```



- 我已经创建了ParkingLotGroup、ParkingLot、Parking的Component
- 我希望我的ParkingLotGroup有多个ParkingLot，每个ParkingLot显示自己的name和tickets中的多个Parking，每个Parking根据position显示plateNumber，如果没有数据则显示为空
- 每个ParkingLot显示Pariking时按照position数据排序，每一行显示三个position，Pariking只显示plateNumber的value
- 我希望显示停车场所有的车位，包括空的位置，你可以通过capacity知道每个停车场的容量
- 我希望你使用Ant-design帮我美化页面，并帮我生成需要调整布局的css，放在各自另外一个文件里

---

## ParkingLotOperate

帮我生成一个供管理员操作的操作栏，包括PlateNumber输入框，接着是策略下拉选择框，再接着是Park和Fetch按钮，要求如下

策略先默认硬编码为三个：Standard/Smart/Super

这些输入框和按钮应该在同一行

Park和Fetch调用后端的api来进行相对于的操作，并更新Context的数据

后端API：

```Java
@PostMapping("/park")  

public ResponseEntity<Ticket> park(@RequestBody Car car, @RequestParam String strategy) {  

  Ticket ticket = parkingManager.park(car, strategy);  

    return ResponseEntity.ok(ticket);  

}  

@PostMapping("/fetch")  

public ResponseEntity<Car> fetch(@RequestBody Ticket ticket) {  

  Car car = parkingManager.fetch(ticket);  

    return ResponseEntity.ok(car);  

}
```

Entity：

```Java
public record Car(String plateNumber) {  
}

public record Ticket(String plateNumber, int position, int parkingLot) {  
}
```

