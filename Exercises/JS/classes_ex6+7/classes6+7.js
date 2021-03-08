class Room {
    constructor(_roomId,_level,_capacity,_isFree = false) {
        this.roomId = _roomId;
        this.level = _level;
        this.capacity = _capacity;
        this.isFree = _isFree;
    }
    taken() {
        this.isFree = false;
    }
    free() {
        this.isFree = true;
    }
    print () {
        console.log(`id: ${this.roomId}, level: ${this.level}, capacity: ${this.capacity}, is free: ${this.isFree}`);   
    }
    submit(num) {
        if (this.capacity === num) {
            this.taken();
            return true;
        }
        return false;
    }
}

class Hotel {
    constructor (_room) {
        this.rooms = [_room];
    }
    print() {
        console.log(this);
    }
    roomIds () {
        const ids = [];
        for(let i = 0; i<this.rooms.length; i++) {
            ids.push(this.rooms[i].roomId);
        }
        return ids;
    }
    addRoom (room) {
        const ids = this.roomIds();
        if (ids.includes(room.roomId)) return false;
        else {
            this.rooms.push(room);
            return true;
        }
    }
    addNewRoom(roomId, level, capacity) {
        const newRoom = new Room(roomId, level, capacity, true);
        this.addRoom(newRoom);
    }
    removeRoom (room) {
        const ids = this.roomIds();


        if (ids.includes(room.roomId) && room.isFree) {
            for(let i = 0; i<this.rooms.length; i++) {

                const listId = this.rooms[i].roomId;
                const id = room.roomId;
    
                if(listId == id) {
                    this.rooms.splice(i, 1);
                    
                }              
            }
            return true;
        }
        return false;
    }
    checkFreeRooms(num) {
        const freeRooms = [];
        this.rooms.forEach(room => {
          if (room.capacity == num && room.isFree)
            freeRooms.push(room);
        })
        console.log(freeRooms);
        return freeRooms;
        
    }
    //would have done it without all the "if"s, but
    //I did not sleep for two days.
    //it works :)
    checkIn (id, capacity) {
        const ids = this.roomIds();
        if (ids.includes(id)) {
            let checkedRoom = {}
            this.rooms.forEach(room => {
                if (room.roomId == id) {
                    checkedRoom = room;
                } 
            })
            if (checkedRoom.capacity == capacity && checkedRoom.isFree) {
                checkedRoom.isFree = false;
                return true;
            }
        }
        return false;  
    }
    highRoomFree () {
        let highest = null;
        const superHigh = [];

        for(let i = 0; i<this.rooms.length; i++) {
            if (this.rooms[i].level > highest) {
                highest = this.rooms[i].level;
            } 
        }
        for(let i = 0; i<this.rooms.length; i++) {
            if(this.rooms[i].level == highest && this.rooms[i].isFree) {
                superHigh.push(this.rooms[i]);
            }
        }
        superHigh.sort((a, b) => (a.capacity - b.capacity));
    }
    getAllRooms(bool) {
        const sameState = [];
        for(let i = 0; i<this.rooms.length; i++) {
            if(this.rooms[i].isFree == bool) {
                sameState.push(this.rooms[i]);
            }
        }
        sameState.sort((a, b) => (a.roomId - b.roomId));
        console.log(sameState);
    }
}

const room1 = new Room(1, 0, 2);
const room2 = new Room(2, 0, 4, true);
const room3 = new Room(3, 0, 3, true);
const room4 = new Room(4, 0, 2, true);
const room5 = new Room(5, 1, 2, true);
const room6 = new Room(6, 1, 4);
const room7 = new Room(7, 10, 2, true);
const room8 = new Room(8, 10, 5, true);
const room9 = new Room(9, 10, 4, true);
const room10 = new Room(10, 10, 4);

// room5.print();
// console.log(room5.submit(4));
// console.log(room5.submit(2));
// room5.submit(2);
// room5.print();

const hotel = new Hotel(room1);


hotel.addRoom(room2);
hotel.addRoom(room3);
hotel.addRoom(room4);
hotel.addRoom(room5);
hotel.addRoom(room6);
hotel.addRoom(room7);
hotel.addRoom(room8);
hotel.addRoom(room9);
hotel.addRoom(room10);

//hotel.checkFreeRooms(2);
//hotel.checkIn(5, 2);
//hotel.print();
//hotel.checkFreeRooms(2);
hotel.highRoomFree();
hotel.getAllRooms(true);