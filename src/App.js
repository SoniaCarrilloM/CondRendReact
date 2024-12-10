import { getImageUrl } from './utils.js';

//three ways of conditioned rendering
function Item ({name,isEaten}) {

  return (
  <li className="item">
    {isEaten ? name + ' ✅' : name +  '  ❌'}
  </li>
);
}

function Breakfast({ name, yesEaten }) {
  let itemContent = name;
  if (yesEaten) {
    itemContent = name + " ✅";
  }
  return (
    <li className="breakfast">
      {itemContent}
    </li>
  );
}

function Snuggled ({name, hasSnuggled}) {

    return (
      <li className="snuggled">
        {name} {hasSnuggled ? '✅' : '❌'}
      </li>
    );
  }
  

function Profile ({
  name,
  imageId,
  profession,
  discovery,
  awards,
  imageSize=70
}) {
  return (
         <section className="profile">
         <h2>{name}</h2>
         <img
          className="avatar"
          src={getImageUrl()}
          alt={name}
          width={imageSize}
          height={imageSize}
           />
<ul>
           <li><b>Profession:</b> {profession}</li>
      <li> <b>discovery:</b>{discovery}</li>
      <li>
          <b>Awards: {awards.length} </b>
          ({awards.join(', ')}) </li>
</ul>
       </section>
       );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists Daily Poo Intake</h1>
          
      <Profile
      imageId= "1308-132745"
      name="Bingo"
      profession ="Whiner"
      discovery = "How to eat poo"
      awards = {[
          'Nobel Prize in Whining',
          'Nobel Prize in Being Irritating',
          'Barking Medal',
          'Whining Medal'
        ]}
        />
        
        <Item
        name = "Soft Poo"
        isEaten = {true}
        />
        <Item
        name = "Hard Poo"
        isEaten = {false}
      />
      <p style={{fontWeight:"bold"}}>Breakfast</p>
           <Breakfast
      name = "Shoe laces"
      yesEaten = {false}
      />
       <Breakfast
      name = "Newspaper"
      yesEaten = {true}
      />
       <Breakfast
      name = "Food"
      yesEaten = {true}
      />
      <p>Snuggled </p>
      <Snuggled
      name = "On the Sofa"
      hasSnuggled = {true}
      />
       <Snuggled
      name = "In bed"
      hasSnuggled = {false}
      />
      
      <Profile
      imageId= "1308-132745"
      name="Clara"
      profession ="Destroyer"
      discovery = "How to break shoes in 60 seconds"
      awards = {[
          'Nobel Prize in Destroying',
          'Nobel Prize in Jumping',
          'Diving Medal',
          'Master Mind Medal'
        ]}
      />
      
      <Item
        name = "Soft Poo"
        isEaten = {false}
        />
        <Item
        name = "Hard Poo"
        isEaten = {false}
      />
        <p style={{fontWeight:"bold"}}>Breakfast</p>
     <Breakfast
      name = "Shoe laces"
      yesEaten = {false}
      />
       <Breakfast
      name = "Newspaper"
      yesEaten = {true}
      />
       <Breakfast
      name = "Food"
      yesEaten = {true}
      />
      <p>Snuggled </p>
      <Snuggled
      name = "On the Sofa"
      hasSnuggled = {false}
      />
       <Snuggled
      name = "In bed"
      hasSnuggled = {false}
      />
<Profile
      imageId= "1308-132745"
      name="Nata"
      profession ="Barker"
      discovery = "How to bark till you drop"
      awards = {[
          'Nobel Prize in Barking',
          'Running Medal',
          'Poo eater Medal'
        ]}
      />
      
      <Item
        name = "Soft Poo"
        isEaten = {false}
        />
        <Item
        name = "Hard Poo"
        isEaten = {true}
      />
        <p style={{fontWeight:"bold"}}>Breakfast</p>
           <Breakfast
      name = "Shoe laces"
      yesEaten = {false}
      />
       <Breakfast
      name = "Newspaper"
      yesEaten = {true}
      />
       <Breakfast
      name = "Food"
      yesEaten = {true}
      />
      <p>Snuggled </p>
      <Snuggled
      name = "On the Sofa"
      hasSnuggled = {true}
      />
       <Snuggled
      name = "In bed"
      hasSnuggled = {true}
      />
     </div>
     );
 }
