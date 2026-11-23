import Card from "./components/card/card";
import stlyes from "./contactList.module.css"

export default function ContactList({contacts,onEdit,onDelete,onToggleFavorite }) {
  

  return (
    <div className={stlyes.container}>
     {contacts.map((item)=>{return <Card contact={item} key={item.id} onEdit={onEdit} onDelete={onDelete} onToggleFavorite={onToggleFavorite}/>})}
    </div>
  );
}
