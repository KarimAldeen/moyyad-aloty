import {  SettingFilled } from '@ant-design/icons';
import React, { useState } from 'react';
import { FloatButton, Tooltip } from 'antd';
import { MdNightlightRound, MdLightMode } from "react-icons/md";
import { FaLanguage } from "react-icons/fa";
import { ColorPicker } from 'antd';
import { getColor, setColor } from '../../Hooks/useColor';
import { useChangeLanguage } from '../../Hooks/useChangeLanguage';
import { useChangeTheme } from '../../Hooks/useChangeTheme';
import { useTranslation } from 'react-i18next';

const FloatOption: React.FC = () => {
    const [PrimaryColor, setPrimaryColor] = useState(getColor("--primary"))
    const [SecondaryColor, setSecondaryColor] = useState(getColor("--secondary"))
    const { currentLanguage, changeLanguage } = useChangeLanguage();
    const { currentTheme, changeTheme } = useChangeTheme();
    const [t] = useTranslation()
    return (
        <FloatButton.Group
        trigger="hover"
            type="primary"
            icon={<SettingFilled />}
            className='FloatButton'
            style={
              currentLanguage === "en" ? { left: "30px" }:{  right: "30px"  }
            }
            
        >
            <Tooltip title={t("setting.PrimaryColor")} placement='rightTop'>
                <FloatButton icon={
                    <ColorPicker defaultValue={PrimaryColor} onChange={
                        (value: any) => {
                            setColor('--primary', value.toHexString());
                            setPrimaryColor(value.toHexString())

                        }
                    } size='small' />} />
            </Tooltip>

            <Tooltip title={t("setting.SecondaryColor")} placement='rightTop'>
                <FloatButton icon={
                    <ColorPicker defaultValue={SecondaryColor} onChange={
                        (value: any) => {
                            setColor('--secondary', value.toHexString());
                            setSecondaryColor(value.toHexString())

                        }
                    } size='small' />} />
            </Tooltip>
             <Tooltip title={t("setting.Change_language")} placement='rightTop'>
                <FloatButton onClick={()=>{
                    currentLanguage === "en" ? changeLanguage("ar")  : changeLanguage("en")
                }} icon={<FaLanguage />} />
            </Tooltip>
            <Tooltip title={ currentTheme !== "light" ? t("setting.Change_to_LightMood") : t("setting.Change_to_DarkMood")} placement='rightTop'>
                <FloatButton onClick={()=>{
                    currentTheme === "light" ? changeTheme("dark")  : changeTheme("light")
                }} icon={ currentTheme !== "light" ?  <MdLightMode /> : <MdNightlightRound /> } />
            </Tooltip>
        </FloatButton.Group>
    );
}

export default FloatOption;