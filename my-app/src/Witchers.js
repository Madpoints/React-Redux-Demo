import React from 'react';

const Witchers = ({witchers}) => {
	const witcherList = witchers.map(witcher => {
		return(
			<div className="witcher" key={witcher.id}>
				<div>Name: {witcher.name}</div>
				<div>Age: {witcher.age}</div>
				<div>School: {witcher.school}</div>	
				<hr></hr>	
			</div>	
		)	
	})
	// const witcherList = witchers.map(witcher => {
	// 	return witcher.school == 'Wolf' ? (
	// 		<div className="witcher" key={witcher.id}>
	// 			<div>Name: {witcher.name}</div>
	// 			<div>Age: {witcher.age}</div>
	// 			<div>School: {witcher.school}</div>	
	// 			<hr></hr>	
	// 		</div>		
	// 	) : null
	// })
	return(
		<div className="witcher-list">
			{witcherList}
		</div>	
	)
}

export default Witchers