
const event = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Jen', 'Mike'],    
    printGuestList() {
        console.log('Guest list for ' + this.name)        
        this.guestList.forEach((guestList) => {
            console.log(guestList + ' is attending ' + this.name)
        })
    }   
}
event.printGuestList()