import { React, useState, useEffect } from "react";
import WishComment from "./WishComment";
import { db } from "./Firebase";
import { collection, addDoc, serverTimestamp, query, orderBy, limit, getDocs } from "firebase/firestore";

const Wish = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [comments, setComments] = useState([]);
  const [submitting, setSubmitting] = useState(false);

  // Function to fetch the latest comments
  const fetchComments = async () => {
    const q = query(
      collection(db, "comments"),
      orderBy("timestamp", "desc"),
      limit(5) // Limit to 5 most recent comments
    );

    const snapshot = await getDocs(q);
    const commentsData = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setComments(commentsData);
  };

  // Fetch comments when the component mounts
  useEffect(() => {
    fetchComments();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name && message) {
      setSubmitting(true);
      try {
        await addDoc(collection(db, "comments"), {
          name,
          message,
          timestamp: serverTimestamp(),
        });
        setName("");
        setMessage("");
        alert("Wish berhasil dikirim");

        // Fetch the latest comments after submitting the form
        await fetchComments();
      } catch (error) {
        alert("Gagal mengirimkan wish. Silakan coba lagi");
        console.error("Error adding comment: ", error);
      }
    } else {
      alert("Mohon isi semua kolom yang tersedia");
    }

    setSubmitting(false);
  };
  return (
    <div id="wish-div" className="h-auto w-full flex flex-col bg-zinc-200 items-center justify-center py-2 px-4 rounded-lg">
      <p className="lora-bold text-zinc-700 text-center text-xl mt-2 mb-4">FRIEND WISHES</p>
      <input type="text" id="input-wish-name" name="NamaWish" placeholder="Ketik Nama Anda" className="bg-zinc-700 text-zinc-200 poppins-regular p-2 w-full mb-2" onChange={(e) => setName(e.target.value)} />
      <textarea name="CommentWish" id="input-wish-comment" placeholder="Ketik Wish Anda" className="bg-zinc-700  text-zinc-200 poppins-regular p-2 w-full" rows={3} onChange={(e) => setMessage(e.target.value)}></textarea>
      <button onClick={handleSubmit} id="send-wish-btn" className="bg-zinc-700 poppins-regular cursor-pointer text-zinc-200 text-lg border text-zinc-200 w-full p-2 mt-4 hover:bg-zinc-800">
        {submitting ? "Sedang Mengirim..." : "Kirim Wish"}
      </button>

      <hr className="w-full h-[0.1rem] bg-zinc-700 my-4" />

      {comments.length > 0 ? comments.map((comment) => <WishComment key={comment.id} name={comment.name} wish={comment.message} time={comment.timestamp} />) : <p className="poppins-regular text-zinc-700 text-center">Belum ada wish dari teman-teman</p>}
    </div>
  );
};

export default Wish;
