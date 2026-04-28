import { Request, response, Response } from 'express';
import prisma from '../database'; 

export class CalcadosController {
  async create(req: Request, res: Response) {
    try {
      const { nome_produto, cor, marca, tamanho, preco, quantidade_em_estoque } = req.body;

      const novo = await prisma.calcado.create({
        data: {
          nome_produto,
          cor,
          marca,
          tamanho: Number(tamanho), 
          preco: Math.round(Number(preco)), 
          quantidade_em_estoque: Number(quantidade_em_estoque),
        },
      });

      return res.status(201).json(novo);
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error: "Erro ao cadastrar calçado" });
    }
  }

  async read(req: Request, res: Response) {
    try {
      
      const todos = await prisma.calcado.findMany();
      return res.json(todos);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao buscar calçados" });
    }
  }

async update(req: Request, res: Response) {
    try {
       const { id } = req.params;
      const { preco, quantidade_em_estoque } = req.body;

      const atualizado = await prisma.calcado.update({
        where: { id: Number(id) },
        data: { 
          preco: preco ? Number(preco) : undefined,
          quantidade_em_estoque: quantidade_em_estoque ? Number(quantidade_em_estoque) : undefined 
        },
      });

      return res.json(atualizado);
    } catch (error) {
      return res.status(400).json({ error: "Erro ao atualizar calçado" });
    }
  }
  
  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;

      await prisma.calcado.delete({
        where: { id: Number(id) },
      });

      return res.status(204).send();
    } catch (error) {
      return res.status(400).json({ error: "Erro ao excluir calçado" });
    }
  }



async findBySize(req: Request, res: Response) {
  try {
    const { tamanho } = req.params; 

    const calcados = await prisma.calcado.findMany({
      where: {
        tamanho: Number(tamanho), 
      },
    });

    return res.json(calcados);
  } catch (error) {
    return res.status(400).json({ error: "Erro ao buscar por tamanho" });
  }
}
}