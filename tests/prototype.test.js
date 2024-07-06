import React from 'react';
import Prototype from "../src/components/prototype/prototype.jsx";
import { create, act } from 'react-test-renderer';

describe('Prototype test', () => {
    it("Prototype should be a React function component", async () => {
        let component;
        await act(async () => {
            component = create(<Prototype />);
        });
        const instance = component.root.instance;
        expect(typeof Prototype).toBe('function');
        expect(instance).toBeNull();
    });
});