"""empty message

<<<<<<<< HEAD:backend/migrations/versions/3b2543751f1c_.py
Revision ID: 3b2543751f1c
Revises: 
Create Date: 2023-01-24 11:45:56.078770
========
Revision ID: c5e7492e3bf9
Revises: 
Create Date: 2023-01-24 10:30:28.410862
>>>>>>>> 4518958 (updated seeds):backend/migrations/versions/c5e7492e3bf9_.py

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
<<<<<<<< HEAD:backend/migrations/versions/3b2543751f1c_.py
revision = '3b2543751f1c'
========
revision = 'c5e7492e3bf9'
>>>>>>>> 4518958 (updated seeds):backend/migrations/versions/c5e7492e3bf9_.py
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('answers',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('content', sa.Text(), nullable=False),
    sa.Column('status', sa.String(), server_default='published', nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=80), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=120), nullable=False),
    sa.Column('admin', sa.Boolean(), server_default='f', nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('users')
    op.drop_table('answers')
    # ### end Alembic commands ###