import firebase from 'firebase'
import db from './firebase';

function getToday(date) {
	date = new Date(date*1000);
	var day = ('0' + date.getDate()).slice(-2);
	var month = ('0' + (date.getMonth() + 1)).slice(-2);
	var year = date.getFullYear();

	return year + '-' + month + '-' + day;
}

export const fetchData = async (board)=>{
	let boardRef
	let querySnapshot
	boardRef = db.collection(board);
	querySnapshot = await boardRef.orderBy('id').get()
	let boardData = [];
	querySnapshot.forEach((doc)=>{
		let rlData = doc.data();
		boardData.push({...rlData, time : getToday(rlData.time.seconds)});
	})
	boardData = boardData.reverse();
	return boardData;
}

export const writeData = async ({board,data})=>{

	let nextId;
	let rating;
	let vote;
	await db.collection('common').doc(board).get().then((doc)=>{
		nextId = parseInt(doc.data().volume);
		rating = parseInt(doc.data().rating);
		vote = parseInt(doc.data().vote);
	})


	await db.collection('common').doc(board)
		.set({
			rating,
			vote,
			volume: nextId+1
		})
	await db.collection(board).doc(`${nextId}`)
		.set({
			...data,
			id: nextId,
			time: firebase.firestore.Timestamp.fromDate(new Date()),
		})
}

export const deleteData = async ({board, index, password})=>{
	let rlpw;
	await db.collection(board).doc(`${index}`).get().then((doc)=>{
		rlpw = doc.data().password;
	})
	if(rlpw == password){
		await db.collection(board).doc(`${index}`).delete()
		return true;
	}else {
		return false;
	}
}

export const fetchRating = async (board)=>{
	let rating;
	let vote;
	await db.collection('common').doc(board).get().then((doc)=>{
		rating = parseInt(doc.data().rating);
		vote = parseInt(doc.data().vote);

	})
	return {rating, vote}
}
export const writeRating = async ({board, rating}) =>{
	let data;
	await db.collection('common').doc(board).get().then((doc)=>{
		data = {
			volume : parseInt(doc.data().volume),
			rating : parseInt(doc.data().rating),
			vote : parseInt(doc.data().vote),
		}
	})

	if(isNaN(data.rating)|| data.rating === 0 || isNaN(data.vote) || data.vote === 0){
		data.rating = rating;
		data.vote = 1;
	}else {
		data.rating = data.rating + rating
		data.vote = data.vote +1
	}
	
	await db.collection('common').doc(board)
		.set({
			...data	
		})
}
