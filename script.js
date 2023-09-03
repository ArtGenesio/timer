let finalDate = null;
let timeId = null
document.getElementById("start").addEventListener('click', function() {
    initTimer()
})

function initTimer() {
    clearInterval(timeId)
    finalDate = document.getElementById("finalInputDate").value
    console.log(finalDate)

    if(finalDate == "") return
    finalDate = new Date(finalDate)

    timer()
    timeId = setInterval(timer, 1000)
}

function timer() {
    const now = new Date().getTime()

    let interval = (finalDate.getTime() - now)/1000
    interval = Math.floor(interval)
    document.getElementById("message").style.display = "none"
    if(interval <= 0) {
        document.getElementById("message").style.display = "block"
        clearInterval(timeId)
        clearTimer()
        
        return
    }

    let days = Math.floor(interval/(3600*24))
    let hours = Math.floor(interval % (3600*24)/3600)
    let minutes = Math.floor(interval%(3600)/60)
    let seconds = Math.floor(interval%60)
    render("#days", days)
    render("#hours", hours)
    render("#minutes", minutes)
    render("#seconds", seconds)
}   

function render(selector,v) {
    document.querySelector(selector).innerHTML = v

}

function clearTimer() {
    render("#days", "-")
    render("#hours", "-")
    render("#minutes", "-")
    render("#seconds", "-")
}