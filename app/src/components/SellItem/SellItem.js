import Header from "../Header/Header";
import { useState } from "react";
import "./SellItem.css";


const SellItem = ({ onRegister }) => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [titel, setTitel] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [photoOne, setPhotoOne] = useState("");
  const [photoTwo, setPhotoTwo] = useState("");
  const [photoThree, setPhotoThree] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const item = {
      name,
      mail,
      phone,
      category,
      location,
      titel,
      description,
      price,
      photoOne,
      photoTwo,
      photoThree,
    };

    onRegister(item);

    setName("");
    setMail("");
    setPhone("");
    setCategory("");
    setLocation("");
    setTitel("");
    setDescription("");
    setPrice("");
    setPhotoOne("");
    setPhotoTwo("");
    setPhotoThree("");
  };

  return (
    <div>
      <Header />
      <div className="formConatiner">
        <h3 className="formTitel">Lägg in annons på Green Secondhand</h3>
        <form className="form" onSubmit={handleSubmit}>
          <label className="inputLabel">Namn</label>
          <br />
          <input
            className="formInput"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />

          <label className="inputLabel">E-post</label>
          <br />
          <input
            className="formInput"
            type="text"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
          <br />

          <label className="inputLabel">Telefon</label>
          <br />
          <input
            className="formInput"
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <br />

          <label className="inputLabel">Kategori</label>
          <br />
          <select
            className="formInput"
            value={category}
            onChange={(e) => {
              setCategory(e.target.text);
            }}
          >
            <option value="">Välj en Kategori</option>
            <option value="Fordon">Fordon</option>
            <option value="Elektronik">Elektronik</option>
            <option value="Personligt">Personligt</option>
            <option value="HobbyFritid">Hobby & fritid</option>
          </select>
          <br />

          <label className="inputLabel">Plats</label>
          <br />
          <input
            className="formInput"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <br />

          <label className="inputLabel">Rubrik</label>
          <br />
          <input
            className="titelInput"
            type="text"
            value={titel}
            onChange={(e) => setTitel(e.target.value)}
          />
          <br />

          <label className="inputLabel">Text</label>
          <br />
          <textarea
            className="textAreaInput"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <br />

          <label className="inputLabel">Pris</label>
          <br />
          <div className="priceDiv">
            <input
              className="formInput priceInput"
              type="numbers"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <div className="priceCurrency">kr</div>
          </div>

          <div className="addImg">
            <label className="inputLabel">Bilder</label>
            <fieldset className="fileInput">
              <input
                type="file"
                value={photoOne}
                onChange={(e) => setPhotoOne(e.target.value)}
              />
            </fieldset>

            <fieldset className="fileInput">
              <input
                type="file"
                value={photoTwo}
                onChange={(e) => setPhotoTwo(e.target.value)}
              />
            </fieldset>

            <fieldset className="fileInput">
              <input
                type="file"
                value={photoThree}
                onChange={(e) => setPhotoThree(e.target.value)}
              />
            </fieldset>
          </div>
          <button className="formSubmitBtn"> Registrera</button>
        </form>
      </div>
    </div>
  );
};

export default SellItem;
