import React from 'react';
import "./Header.css"
function Header(props) {
    return (
        <div className="Headerbox w-100 lg:h-screen h-[200px] relative">
            <div className='lg:w-[462px] w-[201px] lg:h-[296px] h-[139px] absolute lg:left-[330px] left-4 lg:top-[300px] top-5  text-white'>
                <h1 className='font-MorabbaBold italic lg:text-[60px] text-[24px] lg:leading[62px]'>قهوه عربیکا تانزانیا</h1>
                <h2 className='font-Morabba lg:text-[48px] text-[20px] lg:leading-[64px] italic'>یک فنجان بالانس !</h2>
                <div className='w-[100px] h-[2px] bg-orange-300 lg:my-8 my-3'></div>
                <p className='font-Dana  lg:text-2xl text-[12px]'>قطعا نام آشنای عربیکا را شنیده اید، عربیکا یکی از گونه های قهوه است که در نواحی مختلف کمربند قهوه کشت میشود.</p>
            </div>
        </div>
    );
}
export default Header;