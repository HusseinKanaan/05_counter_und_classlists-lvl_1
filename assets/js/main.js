const MeineBucketListe = document.getElementById("MeineBucketListe")
const myBucketList = document.getElementsByName("myBucketList")
console.log('myBucketList')


function changeColor() {
    MeineBucketListe.classList.toggle('neuMeineBucketListe')
    myBucketList.classList.toggle('newMyBucketList')
}