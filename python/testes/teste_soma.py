import unittest
from calculadora.main import calculo_soma


class TesteSoma(unittest.TestCase):
    def test_soma(self):
        self.assertEqual(calculo_soma(2, 2), 4)


if __name__ == '__main__':
    unittest.main()
