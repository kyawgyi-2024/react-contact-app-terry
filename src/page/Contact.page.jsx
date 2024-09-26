import React, { useEffect, useState } from "react";
import { getContactData, deleteContact } from "../service/contact.service";
import { ContactCartComponents, LoadingComponents } from "../components";

const ContactPage = () => {
  const [items, setItems] = useState({
    loading: true,
    data: null,
    error: null,
  });

  const [deleteItem, setDeleteItem] = useState(false);

  const handleDelete = async (id) => {
    // console.log(id)
    await deleteContact(id);
    setDeleteItem((pre) => !pre);
  };

  useEffect(() => {
    (async () => {
      setItems((pre) => ({ ...pre, loading: true }));
      const res = await getContactData();
      if (res.error) {
        setItems((pre) => ({ ...pre, loading: false, error: res.msg }));
      } else {
        setItems((pre) => ({ ...pre, loading: false, data: res }));
      }
    })();
  }, [deleteItem]);
  // console.log(items);
  return (
    <div className=" w-full h-full flex justify-center items-center flex-col">
      {items.loading ? (
        <LoadingComponents />
      ) : (
        <>
          {items.error ? (
            <h1>{items.error}</h1>
          ) : (
            items.data.data.map((i) => (
              <ContactCartComponents
                handleDelete={handleDelete}
                data={i}
                key={i.id}
              />
            ))
          )}
        </>
      )}
    </div>
  );
};

export default ContactPage;
