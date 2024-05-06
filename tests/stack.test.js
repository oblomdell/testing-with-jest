const stack = require('../src/stack');

test('peek on empty stack returns undefined', () => {
    expect(stack.peek()).toBeUndefined();
});

test('peek on stack with one element returns that element', () => {
    stack.push(1);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(1);
});

test('peek on stack with two or more elements returns the top element', () => {
    stack.push(1);
    stack.push("wow");
    stack.push(42);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(42);
});

// Testar om push och pop fungerar som det ska på olika datatyper.
test('pushing and popping different datatypes returns correct datatype', () => {
    // Lägger till 1, "1", false och "key: en nyckel!" i stacken
    stack.push(1);
    stack.push("1");
    stack.push(false)
    stack.push({key: "en nyckel!"});
    // Förväntar oss ett objekt, en boolean, en sträng och ett nummer
    expect(typeof stack.pop()).toBe("object");
    expect(typeof stack.pop()).toBe("string"); // Denna raden är fel
    expect(typeof stack.pop()).toBe("string");
    expect(typeof stack.pop()).toBe("number");
});