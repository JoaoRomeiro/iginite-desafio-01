import React, { useState } from 'react';
import { Switch, StyleSheet } from 'react-native';

interface SwitchProps extends Switch {
    dark: boolean;
}

export function ChangeTheme({ dark, ...rest }: SwitchProps) {
    return (
        <>
            <Switch
                style={styles.switch}
                trackColor={{ false: "#34313D", true: "#A09CB1" }}
                thumbColor={dark ? "#E1E1E6" : "#E1E1E6"}
                value={dark}
                {...rest}
            />
        </>
    )
}

const styles = StyleSheet.create({
    switch: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 60,
    }
});