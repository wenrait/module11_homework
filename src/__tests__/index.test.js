import { getMonth } from '../index'
describe("test getMonth", () => {
    it("getMonth(12) should return 'декабрь'", () => {
        const result = getMonth(12);
        expect(result).toBe('декабрь');
    });

    it("getMonth(1) should return 'январь'", () => {
        const result = getMonth(1);
        expect(result).toBe('январь');
    });

    it("getMonth(13) should return 'неверный номер месяца'", () => {
        const result = getMonth(13);
        expect(result).toBe('неверный номер месяца');
    });

    it("getMonth(0) should return 'неверный номер месяца'", () => {
        const result = getMonth(0);
        expect(result).toBe('неверный номер месяца');
    });

    it("getMonth(-1) should return 'неверный номер месяца'", () => {
        const result = getMonth(-1);
        expect(result).toBe('неверный номер месяца');
    });
});