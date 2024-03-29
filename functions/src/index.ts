import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

const db = admin.firestore();

export const createDocument = functions.https.onRequest(async (req, res) => {
  await db.collection("test").doc("abc").set({ a: 123 });
  res.send();
});

export const updateDocument = functions.https.onRequest(async (req, res) => {
  await db.collection("test").doc("abc").update({ a: 234, b: 345 });
  res.send();
});

export const deleteDocument = functions.https.onRequest(async (req, res) => {
  await db.collection("test").doc("abc").delete();
  res.send();
});

export const getDocument = functions.https.onRequest(async (req, res) => {
  const data = await (await db.collection("test").doc("abc").get()).data();
  res.send(data);
});


export const snippet_onWrite = functions.firestore
  .document(`test/{id}`)
  .onWrite(async (change, context) => {
    console.log("start snippet_onWrite");
    const afterData = change.after.exists ? change.after.data() : null;
    if (afterData == null) return;

    // 単体書き込み ------------------------------
    await admin.firestore().collection("bak1").doc(change.after.id).set(afterData);
    // if (afterData) await db.collection("bak").doc(change.after.id).set(afterData);  // これでもOK

    // トランザクション ------------------------------
    await admin.firestore().runTransaction(async (transaction) => {
      if (change.before.exists && !change.after.exists) {
        // onDelete
      } else {
        // onCreate or onUpdate
        transaction.set(admin.firestore().collection("bak2").doc(change.after.id), { afterData });
      }
    });
  });

