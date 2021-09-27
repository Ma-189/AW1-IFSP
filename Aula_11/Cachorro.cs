using System;
using System.Collections.Generic;
using System.Text;

namespace Aula11
{
    public class Cachorro : Mamífero
    {
        public Cachorro()
        {
            //this.Caracteristicas();
        }
        protected override void Caracteristicas()
        {
            base.Caracteristicas();
            Console.WriteLine("Os cachorros se alimentam de ração própria para cachorros");
        }
    }
}

   
